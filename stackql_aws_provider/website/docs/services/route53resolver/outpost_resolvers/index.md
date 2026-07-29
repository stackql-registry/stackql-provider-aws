--- 
title: outpost_resolvers
hide_title: false
hide_table_of_contents: false
keywords:
  - outpost_resolvers
  - route53resolver
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

Creates, updates, deletes, gets or lists an <code>outpost_resolvers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outpost_resolvers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.outpost_resolvers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_outpost_resolver"
    values={[
        { label: 'get_outpost_resolver', value: 'get_outpost_resolver' }
    ]}
>
<TabItem value="get_outpost_resolver">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) for the Resolver on an Outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the Outpost Resolver was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request that created the Resolver endpoint. The CreatorRequestId allows failed requests to be retried without the risk of running the operation twice.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Resolver on Outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_count" /></td>
    <td><code>integer</code></td>
    <td>Amazon EC2 instance count for the Resolver on the Outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the Outpost Resolver was modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) for the Outpost. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_instance_type" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the Resolver. (CREATING, OPERATIONAL, UPDATING, DELETING, ACTION_NEEDED, FAILED_CREATION, FAILED_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the Resolver.</td>
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
    <td><a href="#get_outpost_resolver"><CopyableCode code="get_outpost_resolver" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified Resolver on the Outpost, such as its instance count and type, name, and the current status of the Resolver.</td>
</tr>
<tr>
    <td><a href="#create_outpost_resolver"><CopyableCode code="create_outpost_resolver" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CreatorRequestId"><code>CreatorRequestId</code></a>, <a href="#parameter-PreferredInstanceType"><code>PreferredInstanceType</code></a>, <a href="#parameter-OutpostArn"><code>OutpostArn</code></a></td>
    <td></td>
    <td>Creates a Route 53 Resolver on an Outpost.</td>
</tr>
<tr>
    <td><a href="#update_outpost_resolver"><CopyableCode code="update_outpost_resolver" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>You can use UpdateOutpostResolver to update the instance count, type, or name of a Resolver on an Outpost.</td>
</tr>
<tr>
    <td><a href="#delete_outpost_resolver"><CopyableCode code="delete_outpost_resolver" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Resolver on the Outpost.</td>
</tr>
<tr>
    <td><a href="#list_outpost_resolvers"><CopyableCode code="list_outpost_resolvers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the Resolvers on Outposts that were created using the current Amazon Web Services account.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_outpost_resolver"
    values={[
        { label: 'get_outpost_resolver', value: 'get_outpost_resolver' }
    ]}
>
<TabItem value="get_outpost_resolver">

Gets information about a specified Resolver on the Outpost, such as its instance count and type, name, and the current status of the Resolver.

```sql
SELECT
arn,
creation_time,
creator_request_id,
id,
instance_count,
modification_time,
name,
outpost_arn,
preferred_instance_type,
status,
status_message
FROM aws.route53resolver.outpost_resolvers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_outpost_resolver"
    values={[
        { label: 'create_outpost_resolver', value: 'create_outpost_resolver' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_outpost_resolver">

Creates a Route 53 Resolver on an Outpost.

```sql
INSERT INTO aws.route53resolver.outpost_resolvers (
CreatorRequestId,
Name,
InstanceCount,
PreferredInstanceType,
OutpostArn,
Tags,
region
)
SELECT 
'{{ CreatorRequestId }}' /* required */,
'{{ Name }}',
{{ InstanceCount }},
'{{ PreferredInstanceType }}' /* required */,
'{{ OutpostArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
outpost_resolver
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: outpost_resolvers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the outpost_resolvers resource.
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
      description: |
        A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. CreatorRequestId can be any unique string, for example, a date/time stamp.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
    - name: InstanceCount
      value: {{ InstanceCount }}
      description: |
        Number of Amazon EC2 instances for the Resolver on Outpost. The default and minimal value is 4.
    - name: PreferredInstanceType
      value: "{{ PreferredInstanceType }}"
      description: |
        The Amazon EC2 instance type. If you specify this, you must also specify a value for the OutpostArn.
    - name: OutpostArn
      value: "{{ OutpostArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Outpost. If you specify this, you must also specify a value for the PreferredInstanceType.
    - name: Tags
      description: |
        A string that helps identify the Route 53 Resolvers on Outpost.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_outpost_resolver"
    values={[
        { label: 'update_outpost_resolver', value: 'update_outpost_resolver' }
    ]}
>
<TabItem value="update_outpost_resolver">

You can use UpdateOutpostResolver to update the instance count, type, or name of a Resolver on an Outpost.

```sql
UPDATE aws.route53resolver.outpost_resolvers
SET 
Id = '{{ Id }}',
Name = '{{ Name }}',
InstanceCount = {{ InstanceCount }},
PreferredInstanceType = '{{ PreferredInstanceType }}'
WHERE 
region = '{{ region }}' --required
RETURNING
outpost_resolver;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_outpost_resolver"
    values={[
        { label: 'delete_outpost_resolver', value: 'delete_outpost_resolver' }
    ]}
>
<TabItem value="delete_outpost_resolver">

Deletes a Resolver on the Outpost.

```sql
DELETE FROM aws.route53resolver.outpost_resolvers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_outpost_resolvers"
    values={[
        { label: 'list_outpost_resolvers', value: 'list_outpost_resolvers' }
    ]}
>
<TabItem value="list_outpost_resolvers">

Lists all the Resolvers on Outposts that were created using the current Amazon Web Services account.

```sql
EXEC aws.route53resolver.outpost_resolvers.list_outpost_resolvers 
@region='{{ region }}' --required 
@@json=
'{
"OutpostArn": "{{ OutpostArn }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
