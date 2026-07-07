--- 
title: health_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - health_checks
  - route53
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

Creates, updates, deletes, gets or lists a <code>health_checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="health_checks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.health_checks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_health_check"
    values={[
        { label: 'get_health_check', value: 'get_health_check' },
        { label: 'list_health_checks', value: 'list_health_checks' }
    ]}
>
<TabItem value="get_health_check">

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
    <td><CopyableCode code="CallerReference" /></td>
    <td><code>string</code></td>
    <td>A unique string that you specified when you created the health check.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudWatchAlarmConfiguration" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckConfig" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains detailed information about one health check.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the health check. You can optionally pass this value in a call to UpdateHealthCheck to prevent overwriting another change to the health check.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="LinkedService" /></td>
    <td><code>string</code></td>
    <td>If the health check was created by another service, the service that created the health check. When a health check is created by another service, you can't edit or delete it using Amazon Route 53.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_health_checks">

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
    <td><CopyableCode code="CallerReference" /></td>
    <td><code>string</code></td>
    <td>A unique string that you specified when you created the health check.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudWatchAlarmConfiguration" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckConfig" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains detailed information about one health check.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the health check. You can optionally pass this value in a call to UpdateHealthCheck to prevent overwriting another change to the health check.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="LinkedService" /></td>
    <td><code>string</code></td>
    <td>If the health check was created by another service, the service that created the health check. When a health check is created by another service, you can't edit or delete it using Amazon Route 53.</td>
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
    <td><a href="#get_health_check"><CopyableCode code="get_health_check" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-health_check_id"><code>health_check_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified health check.</td>
</tr>
<tr>
    <td><a href="#list_health_checks"><CopyableCode code="list_health_checks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-maxitems"><code>maxitems</code></a></td>
    <td>Retrieve a list of the health checks that are associated with the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_health_check"><CopyableCode code="create_health_check" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CallerReference"><code>CallerReference</code></a>, <a href="#parameter-HealthCheckConfig"><code>HealthCheckConfig</code></a></td>
    <td></td>
    <td>Creates a new health check. For information about adding health checks to resource record sets, see HealthCheckId in ChangeResourceRecordSets. ELB Load Balancers If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to a Route 53 health check. Private Hosted Zones You can associate health checks with failover resource record sets in a private hosted zone. Note the following: Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must assign a public IP address to the instance in the VPC. You can configure a health checker to check the health of an external resource that the instance relies on, such as a database server. You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 StatusCheckFailed metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating CloudWatch metrics and alarms by using the CloudWatch console, see the Amazon CloudWatch User Guide.</td>
</tr>
<tr>
    <td><a href="#update_health_check"><CopyableCode code="update_health_check" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-health_check_id"><code>health_check_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing health check. Note that some values can't be updated. For more information about updating health checks, see Creating, Updating, and Deleting Health Checks in the Amazon Route 53 Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_health_check"><CopyableCode code="delete_health_check" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-health_check_id"><code>health_check_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a health check. Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover configuration. For more information, see Replacing and Deleting Health Checks in the Amazon Route 53 Developer Guide. If you're using Cloud Map and you configured Cloud Map to create a Route 53 health check when you register an instance, you can't use the Route 53 DeleteHealthCheck command to delete the health check. The health check is deleted automatically when you deregister the instance; there can be a delay of several hours before the health check is deleted from Route 53.</td>
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
<tr id="parameter-health_check_id">
    <td><CopyableCode code="health_check_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the health check that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>If the value of IsTruncated in the previous response was true, you have more health checks. To get another group, submit another ListHealthChecks request. For the value of marker, specify the value of NextMarker from the previous response, which is the ID of the first health check that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more health checks to get.</td>
</tr>
<tr id="parameter-maxitems">
    <td><CopyableCode code="maxitems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of health checks that you want ListHealthChecks to return in response to the current request. Amazon Route 53 returns a maximum of 1000 items. If you set MaxItems to a value greater than 1000, Route 53 returns only the first 1000 health checks.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_health_check"
    values={[
        { label: 'get_health_check', value: 'get_health_check' },
        { label: 'list_health_checks', value: 'list_health_checks' }
    ]}
>
<TabItem value="get_health_check">

Gets information about a specified health check.

```sql
SELECT
CallerReference,
CloudWatchAlarmConfiguration,
HealthCheckConfig,
HealthCheckVersion,
Id,
LinkedService
FROM aws.route53.health_checks
WHERE health_check_id = '{{ health_check_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_health_checks">

Retrieve a list of the health checks that are associated with the current Amazon Web Services account.

```sql
SELECT
CallerReference,
CloudWatchAlarmConfiguration,
HealthCheckConfig,
HealthCheckVersion,
Id,
LinkedService
FROM aws.route53.health_checks
WHERE region = '{{ region }}' -- required
AND marker = '{{ marker }}'
AND maxitems = '{{ maxitems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_health_check"
    values={[
        { label: 'create_health_check', value: 'create_health_check' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_health_check">

Creates a new health check. For information about adding health checks to resource record sets, see HealthCheckId in ChangeResourceRecordSets. ELB Load Balancers If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to a Route 53 health check. Private Hosted Zones You can associate health checks with failover resource record sets in a private hosted zone. Note the following: Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must assign a public IP address to the instance in the VPC. You can configure a health checker to check the health of an external resource that the instance relies on, such as a database server. You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 StatusCheckFailed metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating CloudWatch metrics and alarms by using the CloudWatch console, see the Amazon CloudWatch User Guide.

```sql
INSERT INTO aws.route53.health_checks (
CallerReference,
HealthCheckConfig,
region
)
SELECT 
'{{ CallerReference }}' /* required */,
'{{ HealthCheckConfig }}' /* required */,
'{{ region }}'
RETURNING
CallerReference,
CloudWatchAlarmConfiguration,
HealthCheckConfig,
HealthCheckVersion,
Id,
LinkedService
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: health_checks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the health_checks resource.
    - name: CallerReference
      value: "{{ CallerReference }}"
    - name: HealthCheckConfig
      description: |
        A complex type that contains information about the health check.
      value:
        IPAddress: "{{ IPAddress }}"
        Port: {{ Port }}
        Type: "{{ Type }}"
        ResourcePath: "{{ ResourcePath }}"
        FullyQualifiedDomainName: "{{ FullyQualifiedDomainName }}"
        SearchString: "{{ SearchString }}"
        RequestInterval: {{ RequestInterval }}
        FailureThreshold: {{ FailureThreshold }}
        MeasureLatency: {{ MeasureLatency }}
        Inverted: {{ Inverted }}
        Disabled: {{ Disabled }}
        HealthThreshold: {{ HealthThreshold }}
        ChildHealthChecks:
          - "{{ ChildHealthChecks }}"
        EnableSNI: {{ EnableSNI }}
        Regions:
          - "{{ Regions }}"
        AlarmIdentifier:
          Region: "{{ Region }}"
          Name: "{{ Name }}"
        InsufficientDataHealthStatus: "{{ InsufficientDataHealthStatus }}"
        RoutingControlArn: "{{ RoutingControlArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_health_check"
    values={[
        { label: 'update_health_check', value: 'update_health_check' }
    ]}
>
<TabItem value="update_health_check">

Updates an existing health check. Note that some values can't be updated. For more information about updating health checks, see Creating, Updating, and Deleting Health Checks in the Amazon Route 53 Developer Guide.

```sql
UPDATE aws.route53.health_checks
SET 
HealthCheckVersion = {{ HealthCheckVersion }},
IPAddress = '{{ IPAddress }}',
Port = {{ Port }},
ResourcePath = '{{ ResourcePath }}',
FullyQualifiedDomainName = '{{ FullyQualifiedDomainName }}',
SearchString = '{{ SearchString }}',
FailureThreshold = {{ FailureThreshold }},
Inverted = {{ Inverted }},
Disabled = {{ Disabled }},
HealthThreshold = {{ HealthThreshold }},
ChildHealthChecks = '{{ ChildHealthChecks }}',
EnableSNI = {{ EnableSNI }},
Regions = '{{ Regions }}',
AlarmIdentifier = '{{ AlarmIdentifier }}',
InsufficientDataHealthStatus = '{{ InsufficientDataHealthStatus }}',
ResetElements = '{{ ResetElements }}'
WHERE 
health_check_id = '{{ health_check_id }}' --required
AND region = '{{ region }}' --required
RETURNING
CallerReference,
CloudWatchAlarmConfiguration,
HealthCheckConfig,
HealthCheckVersion,
Id,
LinkedService;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_health_check"
    values={[
        { label: 'delete_health_check', value: 'delete_health_check' }
    ]}
>
<TabItem value="delete_health_check">

Deletes a health check. Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover configuration. For more information, see Replacing and Deleting Health Checks in the Amazon Route 53 Developer Guide. If you're using Cloud Map and you configured Cloud Map to create a Route 53 health check when you register an instance, you can't use the Route 53 DeleteHealthCheck command to delete the health check. The health check is deleted automatically when you deregister the instance; there can be a delay of several hours before the health check is deleted from Route 53.

```sql
DELETE FROM aws.route53.health_checks
WHERE health_check_id = '{{ health_check_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
