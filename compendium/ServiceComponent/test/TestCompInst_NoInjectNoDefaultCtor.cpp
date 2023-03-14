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
#if NEVER
#  include <algorithm>
#  include <chrono>
#  include <cstdio>
#  include <iostream>

#  include "gtest/gtest.h"

#  include "cppmicroservices/servicecomponent/detail/ComponentInstanceImpl.hpp"
#  include <cppmicroservices/ServiceInterface.h>

using cppmicroservices::service::component::detail::ComponentInstanceImpl;

namespace {

// dummy types used for testing
struct ServiceDependency;
class TestServiceImpl
{
public:
  TestServiceImpl() = delete;
  TestServiceImpl(const std::shared_ptr<ServiceDependency>& d)
    : dep(d)
  {
  }
  virtual ~TestServiceImpl() = default;

private:
  std::shared_ptr<ServiceDependency> dep;
};

/**
 * This test point is used to verify a compile error is generated when a service component
 * has dependencies, opted out of constructor injection and it does not provide a default constructor.
 *
 * @todo Automate this test point. Currently interactive is the only way to verify compilation failures.
 */
TEST(ComponentInstance, CheckNoDefaultCtorNoInjection)
{
  ComponentInstanceImpl<TestServiceImpl,
                        std::tuple<>,
                        std::false_type,
                        ServiceDependency>
    compInstance; // compile error
}
}

int main(int argc, char** argv)
{
  ::testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
#endif
