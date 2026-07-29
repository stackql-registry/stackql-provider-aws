--- 
title: resource_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_sets
  - route53_recovery_readiness
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

Creates, updates, deletes, gets or lists a <code>resource_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_readiness.resource_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_set"
    values={[
        { label: 'get_resource_set', value: 'get_resource_set' },
        { label: 'list_resource_sets', value: 'list_resource_sets' }
    ]}
>
<TabItem value="get_resource_set">

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
    <td><CopyableCode code="resource_set_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the resource set.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_set_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource set. (pattern: &lt;code&gt;\A&#91;a-zA-Z0-9_&#93;+\z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_set_type" /></td>
    <td><code>string</code></td>
    <td>The resource type of the resources in the resource set. Enter one of the following values for resource type: AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource (pattern: &lt;code&gt;AWS::&#91;A-Za-z0-9&#93;+::&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>A list of resource objects.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resource_sets">

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
    <td><CopyableCode code="resource_set_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the resource set.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_set_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource set. (pattern: &lt;code&gt;\A&#91;a-zA-Z0-9_&#93;+\z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_set_type" /></td>
    <td><code>string</code></td>
    <td>The resource type of the resources in the resource set. Enter one of the following values for resource type: AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource (pattern: &lt;code&gt;AWS::&#91;A-Za-z0-9&#93;+::&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>A list of resource objects.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#get_resource_set"><CopyableCode code="get_resource_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_set_name"><code>resource_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays the details about a resource set, including a list of the resources in the set.</td>
</tr>
<tr>
    <td><a href="#list_resource_sets"><CopyableCode code="list_resource_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the resource sets in an account.</td>
</tr>
<tr>
    <td><a href="#create_resource_set"><CopyableCode code="create_resource_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceSetName"><code>ResourceSetName</code></a>, <a href="#parameter-ResourceSetType"><code>ResourceSetType</code></a></td>
    <td></td>
    <td>Creates a resource set. A resource set is a set of resources of one type that span multiple cells. You can associate a resource set with a readiness check to monitor the resources for failover readiness.</td>
</tr>
<tr>
    <td><a href="#update_resource_set"><CopyableCode code="update_resource_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_set_name"><code>resource_set_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceSetType"><code>ResourceSetType</code></a></td>
    <td></td>
    <td>Updates a resource set.</td>
</tr>
<tr>
    <td><a href="#delete_resource_set"><CopyableCode code="delete_resource_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_set_name"><code>resource_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resource set.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_set_name">
    <td><CopyableCode code="resource_set_name" /></td>
    <td><code>string</code></td>
    <td>Name of a resource set.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_set"
    values={[
        { label: 'get_resource_set', value: 'get_resource_set' },
        { label: 'list_resource_sets', value: 'list_resource_sets' }
    ]}
>
<TabItem value="get_resource_set">

Displays the details about a resource set, including a list of the resources in the set.

```sql
SELECT
resource_set_arn,
resource_set_name,
resource_set_type,
resources,
tags
FROM aws.route53_recovery_readiness.resource_sets
WHERE resource_set_name = '{{ resource_set_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resource_sets">

Lists the resource sets in an account.

```sql
SELECT
resource_set_arn,
resource_set_name,
resource_set_type,
resources,
tags
FROM aws.route53_recovery_readiness.resource_sets
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_set"
    values={[
        { label: 'create_resource_set', value: 'create_resource_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_set">

Creates a resource set. A resource set is a set of resources of one type that span multiple cells. You can associate a resource set with a readiness check to monitor the resources for failover readiness.

```sql
INSERT INTO aws.route53_recovery_readiness.resource_sets (
ResourceSetName,
ResourceSetType,
Resources,
Tags,
region
)
SELECT 
'{{ ResourceSetName }}' /* required */,
'{{ ResourceSetType }}' /* required */,
'{{ Resources }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
resource_set_arn,
resource_set_name,
resource_set_type,
resources,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resource_sets resource.
    - name: ResourceSetName
      value: "{{ ResourceSetName }}"
    - name: ResourceSetType
      value: "{{ ResourceSetType }}"
    - name: Resources
      value:
        - ComponentId: "{{ ComponentId }}"
          DnsTargetResource:
            DomainName: "{{ DomainName }}"
            HostedZoneArn: "{{ HostedZoneArn }}"
            RecordSetId: "{{ RecordSetId }}"
            RecordType: "{{ RecordType }}"
            TargetResource:
              NLBResource:
                Arn: "{{ Arn }}"
              R53Resource:
                DomainName: "{{ DomainName }}"
                RecordSetId: "{{ RecordSetId }}"
          ReadinessScopes: "{{ ReadinessScopes }}"
          ResourceArn: "{{ ResourceArn }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of tags associated with a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource_set"
    values={[
        { label: 'update_resource_set', value: 'update_resource_set' }
    ]}
>
<TabItem value="update_resource_set">

Updates a resource set.

```sql
UPDATE aws.route53_recovery_readiness.resource_sets
SET 
ResourceSetType = '{{ ResourceSetType }}',
Resources = '{{ Resources }}'
WHERE 
resource_set_name = '{{ resource_set_name }}' --required
AND region = '{{ region }}' --required
AND ResourceSetType = '{{ ResourceSetType }}' --required
RETURNING
resource_set_arn,
resource_set_name,
resource_set_type,
resources,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_set"
    values={[
        { label: 'delete_resource_set', value: 'delete_resource_set' }
    ]}
>
<TabItem value="delete_resource_set">

Deletes a resource set.

```sql
DELETE FROM aws.route53_recovery_readiness.resource_sets
WHERE resource_set_name = '{{ resource_set_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
