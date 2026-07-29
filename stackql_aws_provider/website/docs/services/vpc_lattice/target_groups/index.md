--- 
title: target_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - target_groups
  - vpc_lattice
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

Creates, updates, deletes, gets or lists a <code>target_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="target_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.target_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_target_group"
    values={[
        { label: 'get_target_group', value: 'get_target_group' },
        { label: 'list_target_groups', value: 'list_target_groups' }
    ]}
>
<TabItem value="get_target_group">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the target group. (pattern: &lt;code&gt;tg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the target group. (pattern: &lt;code&gt;(?!tg-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target group. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:targetgroup/tg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Describes the configuration of a target group. For more information, see Target groups in the Amazon VPC Lattice User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the target group was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_code" /></td>
    <td><code>string</code></td>
    <td>The failure code.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>The failure message.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the target group was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (CREATE_IN_PROGRESS, ACTIVE, DELETE_IN_PROGRESS, CREATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The target group type. (IP, LAMBDA, INSTANCE, ALB)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_target_groups">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the target group. (pattern: &lt;code&gt;tg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the target group. (pattern: &lt;code&gt;(?!tg-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the target group. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:targetgroup/tg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the target group was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The type of IP address used for the target group. The possible values are IPV4 and IPV6. This is an optional parameter. If not specified, the default is IPV4. (IPV4, IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_event_structure_version" /></td>
    <td><code>string</code></td>
    <td>The version of the event structure that your Lambda function receives. Supported only if the target group type is LAMBDA. (V1, V2)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the target group was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port of the target group.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol of the target group. (HTTP, HTTPS, TCP)</td>
</tr>
<tr>
    <td><CopyableCode code="service_arns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (CREATE_IN_PROGRESS, ACTIVE, DELETE_IN_PROGRESS, CREATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The target group type. (IP, LAMBDA, INSTANCE, ALB)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC of the target group. (pattern: &lt;code&gt;vpc-((&#91;0-9a-z&#93;&#123;8&#125;)|(&#91;0-9a-z&#93;&#123;17&#125;))&lt;/code&gt;)</td>
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
    <td><a href="#get_target_group"><CopyableCode code="get_target_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-target_group_identifier"><code>target_group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified target group.</td>
</tr>
<tr>
    <td><a href="#list_target_groups"><CopyableCode code="list_target_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-vpcIdentifier"><code>vpcIdentifier</code></a>, <a href="#parameter-targetGroupType"><code>targetGroupType</code></a></td>
    <td>Lists your target groups. You can narrow your search by using the filters below in your request.</td>
</tr>
<tr>
    <td><a href="#create_target_group"><CopyableCode code="create_target_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service. For more information, see Target groups in the Amazon VPC Lattice User Guide.</td>
</tr>
<tr>
    <td><a href="#update_target_group"><CopyableCode code="update_target_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-target_group_identifier"><code>target_group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-healthCheck"><code>healthCheck</code></a></td>
    <td></td>
    <td>Updates the specified target group.</td>
</tr>
<tr>
    <td><a href="#delete_target_group"><CopyableCode code="delete_target_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-target_group_identifier"><code>target_group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.</td>
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
<tr id="parameter-target_group_identifier">
    <td><CopyableCode code="target_group_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the target group.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for the next page of results.</td>
</tr>
<tr id="parameter-targetGroupType">
    <td><CopyableCode code="targetGroupType" /></td>
    <td><code>string</code></td>
    <td>The target group type.</td>
</tr>
<tr id="parameter-vpcIdentifier">
    <td><CopyableCode code="vpcIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the VPC.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_target_group"
    values={[
        { label: 'get_target_group', value: 'get_target_group' },
        { label: 'list_target_groups', value: 'list_target_groups' }
    ]}
>
<TabItem value="get_target_group">

Retrieves information about the specified target group.

```sql
SELECT
id,
name,
arn,
config,
created_at,
failure_code,
failure_message,
last_updated_at,
service_arns,
status,
type_
FROM aws.vpc_lattice.target_groups
WHERE target_group_identifier = '{{ target_group_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_target_groups">

Lists your target groups. You can narrow your search by using the filters below in your request.

```sql
SELECT
id,
name,
arn,
created_at,
ip_address_type,
lambda_event_structure_version,
last_updated_at,
port,
protocol,
service_arns,
status,
type_,
vpc_identifier
FROM aws.vpc_lattice.target_groups
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND vpcIdentifier = '{{ vpcIdentifier }}'
AND targetGroupType = '{{ targetGroupType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_target_group"
    values={[
        { label: 'create_target_group', value: 'create_target_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_target_group">

Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service. For more information, see Target groups in the Amazon VPC Lattice User Guide.

```sql
INSERT INTO aws.vpc_lattice.target_groups (
name,
type,
config,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ config }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
arn,
config,
status,
type_
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: target_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the target_groups resource.
    - name: name
      value: "{{ name }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['IP', 'LAMBDA', 'INSTANCE', 'ALB']
    - name: config
      description: |
        Describes the configuration of a target group. For more information, see Target groups in the Amazon VPC Lattice User Guide.
      value:
        port: {{ port }}
        protocol: "{{ protocol }}"
        protocolVersion: "{{ protocolVersion }}"
        ipAddressType: "{{ ipAddressType }}"
        vpcIdentifier: "{{ vpcIdentifier }}"
        healthCheck:
          enabled: {{ enabled }}
          protocol: "{{ protocol }}"
          protocolVersion: "{{ protocolVersion }}"
          port: {{ port }}
          path: "{{ path }}"
          healthCheckIntervalSeconds: {{ healthCheckIntervalSeconds }}
          healthCheckTimeoutSeconds: {{ healthCheckTimeoutSeconds }}
          healthyThresholdCount: {{ healthyThresholdCount }}
          unhealthyThresholdCount: {{ unhealthyThresholdCount }}
          matcher:
            httpCode: "{{ httpCode }}"
        lambdaEventStructureVersion: "{{ lambdaEventStructureVersion }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_target_group"
    values={[
        { label: 'update_target_group', value: 'update_target_group' }
    ]}
>
<TabItem value="update_target_group">

Updates the specified target group.

```sql
UPDATE aws.vpc_lattice.target_groups
SET 
healthCheck = '{{ healthCheck }}'
WHERE 
target_group_identifier = '{{ target_group_identifier }}' --required
AND region = '{{ region }}' --required
AND healthCheck = '{{ healthCheck }}' --required
RETURNING
id,
name,
arn,
config,
status,
type_;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_target_group"
    values={[
        { label: 'delete_target_group', value: 'delete_target_group' }
    ]}
>
<TabItem value="delete_target_group">

Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.

```sql
DELETE FROM aws.vpc_lattice.target_groups
WHERE target_group_identifier = '{{ target_group_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
