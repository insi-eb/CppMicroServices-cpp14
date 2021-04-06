#include "ServiceImpl.hpp"
#include <iostream>

namespace sample {

void ServiceComponentCA05a::Modified(
  const std::shared_ptr<ComponentContext>&,
  const std::shared_ptr<cppmicroservices::AnyMap>& configuration)
{
  std::lock_guard<std::mutex> lock(propertiesLock);
  properties = *configuration;
}
cppmicroservices::AnyMap ServiceComponentCA05a::GetProperties()
{
  std::lock_guard<std::mutex> lock(propertiesLock);
  return properties;
}

}
