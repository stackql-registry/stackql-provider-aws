--- 
title: application_status_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - application_status_checks
  - ec2
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>application_status_checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_status_checks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.application_status_checks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application_status_checks"
    values={[
        { label: 'describe_application_status_checks', value: 'describe_application_status_checks' }
    ]}
>
<TabItem value="describe_application_status_checks">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="aggregation" /></td>
    <td><code>string</code></td>
    <td>The aggregation setting for the application status check. When set to included, the result of this check contributes to the instance-level application status. When set to excluded, the check runs independently and does not affect the instance-level status.</td>
</tr>
<tr>
    <td><CopyableCode code="application_status_check_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application status check.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the application status check was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the application status check was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="device_index" /></td>
    <td><code>integer</code></td>
    <td>The index of the network device used for the health check. The value is greater than or equal to 0.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_threshold" /></td>
    <td><code>integer</code></td>
    <td>The number of consecutive failed health checks before the application status is considered impaired. The value must be greater than 0.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_paths" /></td>
    <td><code>string</code></td>
    <td>The health check paths for the application status check.</td>
</tr>
<tr>
    <td><CopyableCode code="initialization_grace_period_seconds" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds to wait before starting health checks after an instance is launched. Valid values: 1 to 600.</td>
</tr>
<tr>
    <td><CopyableCode code="interval" /></td>
    <td><code>integer</code></td>
    <td>The interval, in seconds, between health checks. Valid value: 60.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_scope" /></td>
    <td><code>string</code></td>
    <td>The IP scope used for the health check.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_version" /></td>
    <td><code>string</code></td>
    <td>The IP version used for the health check.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string</code></td>
    <td>The date and time when the application status check was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="modify_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the application status check was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The URL path used for the health check HTTP request.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port used for the health check.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol used for the health check.</td>
</tr>
<tr>
    <td><CopyableCode code="status_code_matcher" /></td>
    <td><code>string</code></td>
    <td>The comma-separated list of individual HTTP status codes or ranges that indicate a successful health check response.</td>
</tr>
<tr>
    <td><CopyableCode code="success_threshold" /></td>
    <td><code>integer</code></td>
    <td>The number of consecutive successful health checks before the application status is considered healthy. The value must be greater than 0.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the application status check.</td>
</tr>
<tr>
    <td><CopyableCode code="target_tag_associations" /></td>
    <td><code>string</code></td>
    <td>The tags associated with the application status check. Instances with these tags are automatically monitored by this check.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The amount of time, in seconds, to wait for a health check response. Valid values: 1 to 30.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_application_status_checks"><CopyableCode code="describe_application_status_checks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ApplicationStatusCheckId"><code>ApplicationStatusCheckId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IncludeAll"><code>IncludeAll</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more application status checks. Returns configuration details for your application status checks, including protocol, port, path, thresholds, and associations. The following rules apply: If you do not specify any application status check IDs, all checks in your account are returned. Use DescribeApplicationStatus to see the actual health status of instances.</td>
</tr>
<tr>
    <td><a href="#create_application_status_check"><CopyableCode code="create_application_status_check" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-HealthCheckPath"><code>HealthCheckPath</code></a>, <a href="#parameter-Aggregation"><code>Aggregation</code></a>, <a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-Path"><code>Path</code></a>, <a href="#parameter-DeviceIndex"><code>DeviceIndex</code></a>, <a href="#parameter-IpVersion"><code>IpVersion</code></a>, <a href="#parameter-IpScope"><code>IpScope</code></a>, <a href="#parameter-Interval"><code>Interval</code></a>, <a href="#parameter-Timeout"><code>Timeout</code></a>, <a href="#parameter-FailureThreshold"><code>FailureThreshold</code></a>, <a href="#parameter-SuccessThreshold"><code>SuccessThreshold</code></a>, <a href="#parameter-StatusCodeMatcher"><code>StatusCodeMatcher</code></a>, <a href="#parameter-InitializationGracePeriodSeconds"><code>InitializationGracePeriodSeconds</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates an application status check for monitoring the health of applications running on your instances. You can configure the protocol, port, path, and thresholds for the health check. The following rules apply: You can create a maximum of 50 application status checks per account. Health checks do not start until you associate the check with instances or tags using AssociateApplicationStatusCheck. The Timeout value must be less than the Interval value. The Path must start with a forward slash (/). Default: /. If you do not specify Aggregation, it defaults to included, which means the check contributes to the instance-level application status. Default values: Interval is 60 seconds, Timeout is 6 seconds, FailureThreshold is 2, SuccessThreshold is 2, StatusCodeMatcher is 200, InitializationGracePeriodSeconds is 300 seconds. You can tag the application status check during creation. For more information, see Tag your Amazon EC2 resources.</td>
</tr>
<tr>
    <td><a href="#associate_application_status_check"><CopyableCode code="associate_application_status_check" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ApplicationStatusCheckId"><code>ApplicationStatusCheckId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetTagAssociation"><code>TargetTagAssociation</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Associates an application status check with instances or tags. Once you create an association, health monitoring automatically begins for the specified instances or for instances that match the specified tags. The following rules apply: You must specify either TargetTagAssociations or InstanceIds, but not both. Specifying both results in an InvalidParameterCombination error. The application status check must already exist and belong to your account. Tag keys must not be blank. Maximum 50 tag associations per application status check. Use DisassociateApplicationStatusCheck to remove associations. When you associate tags, the application status check automatically monitors all current and future instances that have the specified tags.</td>
</tr>
<tr>
    <td><a href="#delete_application_status_check"><CopyableCode code="delete_application_status_check" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ApplicationStatusCheckId"><code>ApplicationStatusCheckId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes an application status check. The following rules apply: Deleting a check automatically removes all of its associations. Use DescribeApplicationStatusChecks to view existing checks before deleting.</td>
</tr>
<tr>
    <td><a href="#disable_application_status_check_suppression"><CopyableCode code="disable_application_status_check_suppression" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables suppression of application status checks for the specified instances. After suppression is disabled, health check results resume affecting the instance-level application status. You can specify a maximum of 100 instance IDs per request.</td>
</tr>
<tr>
    <td><a href="#disassociate_application_status_check"><CopyableCode code="disassociate_application_status_check" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ApplicationStatusCheckId"><code>ApplicationStatusCheckId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetTagAssociation"><code>TargetTagAssociation</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates an application status check from instances or tags. After disassociation, health monitoring stops for the affected instances. The following rules apply: You must specify either TargetTagAssociations or InstanceIds, but not both. Specifying both results in an InvalidParameterCombination error. The application status check must already exist and belong to your account. Tag keys must not be blank.</td>
</tr>
<tr>
    <td><a href="#enable_application_status_check_suppression"><CopyableCode code="enable_application_status_check_suppression" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-DurationSeconds"><code>DurationSeconds</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Suppresses application status checks for the specified instances. While suppressed, health checks continue to run but do not affect the instance-level application status. The following rules apply: Maximum 100 instance IDs per request. Use DisableApplicationStatusCheckSuppression to resume normal health check reporting. If you do not specify DurationSeconds, suppression continues indefinitely until you call DisableApplicationStatusCheckSuppression.</td>
</tr>
<tr>
    <td><a href="#modify_application_status_check"><CopyableCode code="modify_application_status_check" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ApplicationStatusCheckId"><code>ApplicationStatusCheckId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Aggregation"><code>Aggregation</code></a>, <a href="#parameter-HealthCheckPath"><code>HealthCheckPath</code></a>, <a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-Path"><code>Path</code></a>, <a href="#parameter-DeviceIndex"><code>DeviceIndex</code></a>, <a href="#parameter-IpVersion"><code>IpVersion</code></a>, <a href="#parameter-IpScope"><code>IpScope</code></a>, <a href="#parameter-Interval"><code>Interval</code></a>, <a href="#parameter-Timeout"><code>Timeout</code></a>, <a href="#parameter-FailureThreshold"><code>FailureThreshold</code></a>, <a href="#parameter-SuccessThreshold"><code>SuccessThreshold</code></a>, <a href="#parameter-StatusCodeMatcher"><code>StatusCodeMatcher</code></a>, <a href="#parameter-InitializationGracePeriodSeconds"><code>InitializationGracePeriodSeconds</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies an existing application status check. You can update the protocol, port, path, thresholds, and other configuration settings. The following rules apply: The application status check must exist and belong to your account. Changes take effect on the next health check interval.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-ApplicationStatusCheckId">
    <td><CopyableCode code="ApplicationStatusCheckId" /></td>
    <td><code>string</code></td>
    <td>The ID of the application status check to modify.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Aggregation">
    <td><CopyableCode code="Aggregation" /></td>
    <td><code>string</code></td>
    <td>The aggregation setting for the application status check. When set to included, the result of this check contributes to the instance-level application status reported by DescribeApplicationStatus. When set to excluded, the check runs independently and does not affect the instance-level status. Valid values: included | excluded.</td>
</tr>
<tr id="parameter-ApplicationStatusCheckId">
    <td><CopyableCode code="ApplicationStatusCheckId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the application status checks to describe.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-DeviceIndex">
    <td><CopyableCode code="DeviceIndex" /></td>
    <td><code>integer</code></td>
    <td>The index of the network device to use for the health check. The value must be greater than or equal to 0.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-DurationSeconds">
    <td><CopyableCode code="DurationSeconds" /></td>
    <td><code>integer</code></td>
    <td>The duration, in seconds, for which to suppress application status checks. If omitted, the application status check is suppressed indefinitely until you call DisableApplicationStatusCheckSuppression.</td>
</tr>
<tr id="parameter-FailureThreshold">
    <td><CopyableCode code="FailureThreshold" /></td>
    <td><code>integer</code></td>
    <td>The number of consecutive failed health checks before the application status is considered impaired. The value must be greater than 0.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. aggregation – The aggregation setting. Valid values: included and excluded.</td>
</tr>
<tr id="parameter-HealthCheckPath">
    <td><CopyableCode code="HealthCheckPath" /></td>
    <td><code>array</code></td>
    <td>The health check paths to use for the application status check.</td>
</tr>
<tr id="parameter-IncludeAll">
    <td><CopyableCode code="IncludeAll" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to include recently deleted application status checks that remain available during the deletion grace period. If you omit this parameter or set it to false, the response includes only active checks.</td>
</tr>
<tr id="parameter-InitializationGracePeriodSeconds">
    <td><CopyableCode code="InitializationGracePeriodSeconds" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds to wait before starting health checks after an instance is launched. Valid values: 1 to 600.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the instances for which to suppress application status checks.</td>
</tr>
<tr id="parameter-Interval">
    <td><CopyableCode code="Interval" /></td>
    <td><code>integer</code></td>
    <td>The interval, in seconds, between health checks. Valid value: 60.</td>
</tr>
<tr id="parameter-IpScope">
    <td><CopyableCode code="IpScope" /></td>
    <td><code>string</code></td>
    <td>The IP scope to use for the health check. Valid value: private.</td>
</tr>
<tr id="parameter-IpVersion">
    <td><CopyableCode code="IpVersion" /></td>
    <td><code>string</code></td>
    <td>The IP version to use for the health check. Valid values: ipv4 and ipv6.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-Path">
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The URL path to use for the health check HTTP request (for example, /health or /status).</td>
</tr>
<tr id="parameter-Port">
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port to use for the health check. Valid values: 1 to 65535.</td>
</tr>
<tr id="parameter-Protocol">
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol to use for the health check. Valid values: http | https.</td>
</tr>
<tr id="parameter-StatusCodeMatcher">
    <td><CopyableCode code="StatusCodeMatcher" /></td>
    <td><code>string</code></td>
    <td>The HTTP status codes that indicate a successful health check response. Specify a comma-separated list of individual status codes or ranges, for example, 200,202,300-399. For a range, the first value must be less than the second value. Maximum length: 64 characters.</td>
</tr>
<tr id="parameter-SuccessThreshold">
    <td><CopyableCode code="SuccessThreshold" /></td>
    <td><code>integer</code></td>
    <td>The number of consecutive successful health checks before the application status is considered healthy. The value must be greater than 0.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the application status check.</td>
</tr>
<tr id="parameter-TargetTagAssociation">
    <td><CopyableCode code="TargetTagAssociation" /></td>
    <td><code>array</code></td>
    <td>The tags to disassociate from the application status check. Specify the same key-value pairs that were used during association.</td>
</tr>
<tr id="parameter-Timeout">
    <td><CopyableCode code="Timeout" /></td>
    <td><code>integer</code></td>
    <td>The amount of time, in seconds, to wait for a health check response before considering it failed. Valid values: 1 to 30. The value must be less than Interval.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_application_status_checks"
    values={[
        { label: 'describe_application_status_checks', value: 'describe_application_status_checks' }
    ]}
>
<TabItem value="describe_application_status_checks">

Describes one or more application status checks. Returns configuration details for your application status checks, including protocol, port, path, thresholds, and associations. The following rules apply: If you do not specify any application status check IDs, all checks in your account are returned. Use DescribeApplicationStatus to see the actual health status of instances.

```sql
SELECT
aggregation,
application_status_check_id,
creation_time,
deletion_time,
device_index,
failure_threshold,
health_check_paths,
initialization_grace_period_seconds,
interval,
ip_scope,
ip_version,
last_updated_at,
modify_time,
path,
port,
protocol,
status_code_matcher,
success_threshold,
tags,
target_tag_associations,
timeout
FROM aws.ec2.application_status_checks
WHERE region = '{{ region }}' -- required
AND ApplicationStatusCheckId = '{{ ApplicationStatusCheckId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IncludeAll = '{{ IncludeAll }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application_status_check"
    values={[
        { label: 'create_application_status_check', value: 'create_application_status_check' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application_status_check">

Creates an application status check for monitoring the health of applications running on your instances. You can configure the protocol, port, path, and thresholds for the health check. The following rules apply: You can create a maximum of 50 application status checks per account. Health checks do not start until you associate the check with instances or tags using AssociateApplicationStatusCheck. The Timeout value must be less than the Interval value. The Path must start with a forward slash (/). Default: /. If you do not specify Aggregation, it defaults to included, which means the check contributes to the instance-level application status. Default values: Interval is 60 seconds, Timeout is 6 seconds, FailureThreshold is 2, SuccessThreshold is 2, StatusCodeMatcher is 200, InitializationGracePeriodSeconds is 300 seconds. You can tag the application status check during creation. For more information, see Tag your Amazon EC2 resources.

```sql
INSERT INTO aws.ec2.application_status_checks (
region,
HealthCheckPath,
Aggregation,
Protocol,
Port,
Path,
DeviceIndex,
IpVersion,
IpScope,
Interval,
Timeout,
FailureThreshold,
SuccessThreshold,
StatusCodeMatcher,
InitializationGracePeriodSeconds,
TagSpecification,
ClientToken,
DryRun
)
SELECT 
'{{ region }}',
'{{ HealthCheckPath }}',
'{{ Aggregation }}',
'{{ Protocol }}',
'{{ Port }}',
'{{ Path }}',
'{{ DeviceIndex }}',
'{{ IpVersion }}',
'{{ IpScope }}',
'{{ Interval }}',
'{{ Timeout }}',
'{{ FailureThreshold }}',
'{{ SuccessThreshold }}',
'{{ StatusCodeMatcher }}',
'{{ InitializationGracePeriodSeconds }}',
'{{ TagSpecification }}',
'{{ ClientToken }}',
'{{ DryRun }}'
RETURNING
aggregation,
application_status_check_id,
creation_time,
deletion_time,
device_index,
failure_threshold,
health_check_paths,
initialization_grace_period_seconds,
interval,
ip_scope,
ip_version,
last_updated_at,
modify_time,
path,
port,
protocol,
status_code_matcher,
success_threshold,
tags,
target_tag_associations,
timeout
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: application_status_checks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the application_status_checks resource.
    - name: HealthCheckPath
      value: "{{ HealthCheckPath }}"
      description: The health check paths to use for the application status check. Health check paths define the network path from a source subnet to one or more destination subnets for cross-Availability Zone or Availability Zone to Local Zone health checking. If omitted, health checks are performed in the same subnet as the instance.
      description: The health check paths to use for the application status check. Health check paths define the network path from a source subnet to one or more destination subnets for cross-Availability Zone or Availability Zone to Local Zone health checking. If omitted, health checks are performed in the same subnet as the instance.
    - name: Aggregation
      value: "{{ Aggregation }}"
      description: The aggregation setting for the application status check. When set to included, the result of this check contributes to the instance-level application status reported by DescribeApplicationStatus. When set to excluded, the check runs independently and does not affect the instance-level status. Valid values: included | excluded.
      description: The aggregation setting for the application status check. When set to included, the result of this check contributes to the instance-level application status reported by DescribeApplicationStatus. When set to excluded, the check runs independently and does not affect the instance-level status. Valid values: included | excluded.
    - name: Protocol
      value: "{{ Protocol }}"
      description: The protocol to use for the health check. Valid values: http | https.
      description: The protocol to use for the health check. Valid values: http | https.
    - name: Port
      value: {{ Port }}
      description: The port to use for the health check. Valid values: 1 to 65535.
      description: The port to use for the health check. Valid values: 1 to 65535.
    - name: Path
      value: "{{ Path }}"
      description: The URL path to use for the health check HTTP request (for example, /health or /status).
      description: The URL path to use for the health check HTTP request (for example, /health or /status).
    - name: DeviceIndex
      value: {{ DeviceIndex }}
      description: The index of the network device to use for the health check. The value must be greater than or equal to 0.
      description: The index of the network device to use for the health check. The value must be greater than or equal to 0.
    - name: IpVersion
      value: "{{ IpVersion }}"
      description: The IP version to use for the health check. Valid values: ipv4 and ipv6.
      description: The IP version to use for the health check. Valid values: ipv4 and ipv6.
    - name: IpScope
      value: "{{ IpScope }}"
      description: The IP scope to use for the health check. Valid value: private.
      description: The IP scope to use for the health check. Valid value: private.
    - name: Interval
      value: {{ Interval }}
      description: The interval, in seconds, between health checks. Valid value: 60.
      description: The interval, in seconds, between health checks. Valid value: 60.
    - name: Timeout
      value: {{ Timeout }}
      description: The amount of time, in seconds, to wait for a health check response before considering it failed. Valid values: 1 to 30. The value must be less than Interval.
      description: The amount of time, in seconds, to wait for a health check response before considering it failed. Valid values: 1 to 30. The value must be less than Interval.
    - name: FailureThreshold
      value: {{ FailureThreshold }}
      description: The number of consecutive failed health checks before the application status is considered impaired. The value must be greater than 0.
      description: The number of consecutive failed health checks before the application status is considered impaired. The value must be greater than 0.
    - name: SuccessThreshold
      value: {{ SuccessThreshold }}
      description: The number of consecutive successful health checks before the application status is considered healthy. The value must be greater than 0.
      description: The number of consecutive successful health checks before the application status is considered healthy. The value must be greater than 0.
    - name: StatusCodeMatcher
      value: "{{ StatusCodeMatcher }}"
      description: The HTTP status codes that indicate a successful health check response. Specify a comma-separated list of individual status codes or ranges, for example, 200,202,300-399. For a range, the first value must be less than the second value. Maximum length: 64 characters. Default: 200.
      description: The HTTP status codes that indicate a successful health check response. Specify a comma-separated list of individual status codes or ranges, for example, 200,202,300-399. For a range, the first value must be less than the second value. Maximum length: 64 characters. Default: 200.
    - name: InitializationGracePeriodSeconds
      value: {{ InitializationGracePeriodSeconds }}
      description: The number of seconds to wait before starting health checks after an instance is launched. Valid values: 1 to 600.
      description: The number of seconds to wait before starting health checks after an instance is launched. Valid values: 1 to 600.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the application status check.
      description: The tags to apply to the application status check.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_application_status_check"
    values={[
        { label: 'associate_application_status_check', value: 'associate_application_status_check' }
    ]}
>
<TabItem value="associate_application_status_check">

Associates an application status check with instances or tags. Once you create an association, health monitoring automatically begins for the specified instances or for instances that match the specified tags. The following rules apply: You must specify either TargetTagAssociations or InstanceIds, but not both. Specifying both results in an InvalidParameterCombination error. The application status check must already exist and belong to your account. Tag keys must not be blank. Maximum 50 tag associations per application status check. Use DisassociateApplicationStatusCheck to remove associations. When you associate tags, the application status check automatically monitors all current and future instances that have the specified tags.

```sql
UPDATE aws.ec2.application_status_checks
SET 
-- No updatable properties
WHERE 
ApplicationStatusCheckId = '{{ ApplicationStatusCheckId }}' --required
AND region = '{{ region }}' --required
AND TargetTagAssociation = '{{ TargetTagAssociation}}'
AND InstanceId = '{{ InstanceId}}'
AND ClientToken = '{{ ClientToken}}'
AND DryRun = {{ DryRun}}
RETURNING
successful_results,
unsuccessful_results;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_status_check"
    values={[
        { label: 'delete_application_status_check', value: 'delete_application_status_check' }
    ]}
>
<TabItem value="delete_application_status_check">

Deletes an application status check. The following rules apply: Deleting a check automatically removes all of its associations. Use DescribeApplicationStatusChecks to view existing checks before deleting.

```sql
DELETE FROM aws.ec2.application_status_checks
WHERE ApplicationStatusCheckId = '{{ ApplicationStatusCheckId }}' --required
AND region = '{{ region }}' --required
AND ClientToken = '{{ ClientToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_application_status_check_suppression"
    values={[
        { label: 'disable_application_status_check_suppression', value: 'disable_application_status_check_suppression' },
        { label: 'disassociate_application_status_check', value: 'disassociate_application_status_check' },
        { label: 'enable_application_status_check_suppression', value: 'enable_application_status_check_suppression' },
        { label: 'modify_application_status_check', value: 'modify_application_status_check' }
    ]}
>
<TabItem value="disable_application_status_check_suppression">

Disables suppression of application status checks for the specified instances. After suppression is disabled, health check results resume affecting the instance-level application status. You can specify a maximum of 100 instance IDs per request.

```sql
EXEC aws.ec2.application_status_checks.disable_application_status_check_suppression 
@region='{{ region }}' --required, 
@InstanceId='{{ InstanceId }}', 
@ClientToken='{{ ClientToken }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="disassociate_application_status_check">

Disassociates an application status check from instances or tags. After disassociation, health monitoring stops for the affected instances. The following rules apply: You must specify either TargetTagAssociations or InstanceIds, but not both. Specifying both results in an InvalidParameterCombination error. The application status check must already exist and belong to your account. Tag keys must not be blank.

```sql
EXEC aws.ec2.application_status_checks.disassociate_application_status_check 
@ApplicationStatusCheckId='{{ ApplicationStatusCheckId }}' --required, 
@region='{{ region }}' --required, 
@TargetTagAssociation='{{ TargetTagAssociation }}', 
@InstanceId='{{ InstanceId }}', 
@ClientToken='{{ ClientToken }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_application_status_check_suppression">

Suppresses application status checks for the specified instances. While suppressed, health checks continue to run but do not affect the instance-level application status. The following rules apply: Maximum 100 instance IDs per request. Use DisableApplicationStatusCheckSuppression to resume normal health check reporting. If you do not specify DurationSeconds, suppression continues indefinitely until you call DisableApplicationStatusCheckSuppression.

```sql
EXEC aws.ec2.application_status_checks.enable_application_status_check_suppression 
@region='{{ region }}' --required, 
@InstanceId='{{ InstanceId }}', 
@DurationSeconds='{{ DurationSeconds }}', 
@ClientToken='{{ ClientToken }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="modify_application_status_check">

Modifies an existing application status check. You can update the protocol, port, path, thresholds, and other configuration settings. The following rules apply: The application status check must exist and belong to your account. Changes take effect on the next health check interval.

```sql
EXEC aws.ec2.application_status_checks.modify_application_status_check 
@ApplicationStatusCheckId='{{ ApplicationStatusCheckId }}' --required, 
@region='{{ region }}' --required, 
@Aggregation='{{ Aggregation }}', 
@HealthCheckPath='{{ HealthCheckPath }}', 
@Protocol='{{ Protocol }}', 
@Port='{{ Port }}', 
@Path='{{ Path }}', 
@DeviceIndex='{{ DeviceIndex }}', 
@IpVersion='{{ IpVersion }}', 
@IpScope='{{ IpScope }}', 
@Interval='{{ Interval }}', 
@Timeout='{{ Timeout }}', 
@FailureThreshold='{{ FailureThreshold }}', 
@SuccessThreshold='{{ SuccessThreshold }}', 
@StatusCodeMatcher='{{ StatusCodeMatcher }}', 
@InitializationGracePeriodSeconds='{{ InitializationGracePeriodSeconds }}', 
@ClientToken='{{ ClientToken }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
