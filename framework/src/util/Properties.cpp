/*=============================================================================

  Library: CppMicroServices

  Copyright (c) The CppMicroServices developers. See the COPYRIGHT
  file at the top-level directory of this distribution and at
  https://github.com/CppMicroServices/CppMicroServices/COPYRIGHT .

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

=============================================================================*/

#include "Properties.h"

#include <limits>
#include <stdexcept>
#include <unordered_set>
#ifdef US_PLATFORM_WINDOWS
#  include <string.h>
#  define ci_compare strnicmp
#else
#  include <strings.h>
#  define ci_compare strncasecmp
#endif

#define WE_ARE_TESTING

#if defined(WE_ARE_TESTING)
#include <iostream>
#endif

US_MSVC_PUSH_DISABLE_WARNING(4996)

namespace cppmicroservices {

namespace {
struct any_set_cihash
{
  std::size_t operator()(std::string_view key) const
  {
    std::string lcase(key);
    std::transform(lcase.begin(), lcase.end(), lcase.begin(), ::tolower);
    return std::hash<std::string_view>{}(std::string_view(lcase));
  }
};

struct any_set_ciequal
{
  bool operator()(std::string_view l, std::string_view r) const
  {
    return (l.size() == r.size() &&
            std::equal(l.begin(), l.end(), r.begin(), [](char a, char b) {
              return tolower(a) == tolower(b);
            }));
  }
};
}

using unordered_any_ciset =
  std::unordered_set<std::string_view, any_set_cihash, any_set_ciequal>;

const Any Properties::emptyAny;

Properties::Properties(const AnyMap& p)
  : props(p)
{
  #if defined(WE_ARE_TESTING)
  std::cerr << "Properties::AnyMap& called" << std::endl;
  #endif

  if (p.size() > static_cast<std::size_t>(std::numeric_limits<int>::max())) {
    throw std::runtime_error("Properties contain too many keys");
  }

  Properties::ValidateProperties(p);
}

Properties::Properties(AnyMap&& p)
  : props(std::move(p))
{
  #if defined(WE_ARE_TESTING)
  std::cerr << "Properties::AnyMap&& called" << std::endl;
  #endif

  if (props.size() >
      static_cast<std::size_t>(std::numeric_limits<int>::max())) {
    throw std::runtime_error("Properties contain too many keys");
  }

  Properties::ValidateProperties(props);
}

Properties::Properties(Properties&& o)
  : props(std::move(o.props))
{
}

Properties& Properties::operator=(Properties&& o)
{
  props = std::move(o.props);
  return *this;
}

Any Properties::Value_unlocked(const std::string& key, bool* found) const
{
  auto itr = props.uoci_m().find(key);
  if (itr == props.uoci_m().end()) {
    if (found) {
      *found = false;
    }
    return emptyAny;
  }

  if (found) {
    *found = true;
  }
  return itr->second;
}

std::vector<std::string> Properties::Keys_unlocked() const
{
  std::vector<std::string> result{};
  for (auto& [key, _] : props) {
    result.push_back(key);
  }
  return result;
}

void Properties::Clear_unlocked()
{
  props.clear();
}

void Properties::ValidateProperties(const AnyMap& props)
{
  unordered_any_ciset keys;
  for (auto& [key, _] : props) {
    if (keys.insert(std::string_view(key)).second == false) {
      std::string msg("Properties contain case variants of the key: ");
      msg += key;
      throw std::runtime_error(msg.c_str());
    }
  }
}
}

US_MSVC_POP_WARNING
