--- 
title: routing_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - routing_rules
  - apigatewayv2
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

Creates, updates, deletes, gets or lists a <code>routing_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routing_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.routing_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_routing_rule"
    values={[
        { label: 'get_routing_rule', value: 'get_routing_rule' },
        { label: 'list_routing_rules', value: 'list_routing_rules' }
    ]}
>
<TabItem value="get_routing_rule">

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
    <td><CopyableCode code="Actions" /></td>
    <td><code>array</code></td>
    <td>The resulting action based on matching a routing rules condition. Only InvokeApi is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="Conditions" /></td>
    <td><code>array</code></td>
    <td>The conditions of the routing rule.</td>
</tr>
<tr>
    <td><CopyableCode code="Priority" /></td>
    <td><code>integer</code></td>
    <td>The routing rule priority.</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingRuleArn" /></td>
    <td><code>string</code></td>
    <td>Represents an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingRuleId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_routing_rules">

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
    <td><CopyableCode code="Actions" /></td>
    <td><code>array</code></td>
    <td>The routing rule action.</td>
</tr>
<tr>
    <td><CopyableCode code="Conditions" /></td>
    <td><code>array</code></td>
    <td>The routing rule condition.</td>
</tr>
<tr>
    <td><CopyableCode code="Priority" /></td>
    <td><code>integer</code></td>
    <td>The routing rule priority.</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingRuleArn" /></td>
    <td><code>string</code></td>
    <td>Represents an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingRuleId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
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
    <td><a href="#get_routing_rule"><CopyableCode code="get_routing_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-routing_rule_id"><code>routing_rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a></td>
    <td>Gets a routing rule.</td>
</tr>
<tr>
    <td><a href="#list_routing_rules"><CopyableCode code="list_routing_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists routing rules.</td>
</tr>
<tr>
    <td><a href="#create_routing_rule"><CopyableCode code="create_routing_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a></td>
    <td>Creates a RoutingRule.</td>
</tr>
<tr>
    <td><a href="#put_routing_rule"><CopyableCode code="put_routing_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-routing_rule_id"><code>routing_rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a></td>
    <td>Updates a routing rule.</td>
</tr>
<tr>
    <td><a href="#delete_routing_rule"><CopyableCode code="delete_routing_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-routing_rule_id"><code>routing_rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a></td>
    <td>Deletes a routing rule.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-routing_rule_id">
    <td><CopyableCode code="routing_rule_id" /></td>
    <td><code>string</code></td>
    <td>The routing rule ID.</td>
</tr>
<tr id="parameter-domainNameId">
    <td><CopyableCode code="domainNameId" /></td>
    <td><code>string</code></td>
    <td>The domain name ID.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of elements to be returned for this resource.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page of elements from this collection. Not valid for the last element of the collection.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_routing_rule"
    values={[
        { label: 'get_routing_rule', value: 'get_routing_rule' },
        { label: 'list_routing_rules', value: 'list_routing_rules' }
    ]}
>
<TabItem value="get_routing_rule">

Gets a routing rule.

```sql
SELECT
Actions,
Conditions,
Priority,
RoutingRuleArn,
RoutingRuleId
FROM aws.apigatewayv2.routing_rules
WHERE domain_name = '{{ domain_name }}' -- required
AND routing_rule_id = '{{ routing_rule_id }}' -- required
AND region = '{{ region }}' -- required
AND domainNameId = '{{ domainNameId }}'
;
```
</TabItem>
<TabItem value="list_routing_rules">

Lists routing rules.

```sql
SELECT
Actions,
Conditions,
Priority,
RoutingRuleArn,
RoutingRuleId
FROM aws.apigatewayv2.routing_rules
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND domainNameId = '{{ domainNameId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_routing_rule"
    values={[
        { label: 'create_routing_rule', value: 'create_routing_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_routing_rule">

Creates a RoutingRule.

```sql
INSERT INTO aws.apigatewayv2.routing_rules (
Actions,
Conditions,
Priority,
domain_name,
region,
domainNameId
)
SELECT 
'{{ Actions }}',
'{{ Conditions }}',
{{ Priority }},
'{{ domain_name }}',
'{{ region }}',
'{{ domainNameId }}'
RETURNING
Actions,
Conditions,
Priority,
RoutingRuleArn,
RoutingRuleId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: routing_rules
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the routing_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the routing_rules resource.
    - name: Actions
      value:
        - InvokeApi:
            ApiId: "{{ ApiId }}"
            Stage: "{{ Stage }}"
            StripBasePath: {{ StripBasePath }}
    - name: Conditions
      value:
        - MatchBasePaths:
            AnyOf:
              - "{{ AnyOf }}"
          MatchHeaders:
            AnyOf:
              - Header: "{{ Header }}"
                ValueGlob: "{{ ValueGlob }}"
    - name: Priority
      value: {{ Priority }}
      description: |
        The routing rule priority.
    - name: domainNameId
      value: "{{ domainNameId }}"
      description: The domain name ID.
      description: The domain name ID.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_routing_rule"
    values={[
        { label: 'put_routing_rule', value: 'put_routing_rule' }
    ]}
>
<TabItem value="put_routing_rule">

Updates a routing rule.

```sql
REPLACE aws.apigatewayv2.routing_rules
SET 
Actions = '{{ Actions }}',
Conditions = '{{ Conditions }}',
Priority = {{ Priority }}
WHERE 
domain_name = '{{ domain_name }}' --required
AND routing_rule_id = '{{ routing_rule_id }}' --required
AND region = '{{ region }}' --required
AND domainNameId = '{{ domainNameId}}'
RETURNING
Actions,
Conditions,
Priority,
RoutingRuleArn,
RoutingRuleId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_routing_rule"
    values={[
        { label: 'delete_routing_rule', value: 'delete_routing_rule' }
    ]}
>
<TabItem value="delete_routing_rule">

Deletes a routing rule.

```sql
DELETE FROM aws.apigatewayv2.routing_rules
WHERE domain_name = '{{ domain_name }}' --required
AND routing_rule_id = '{{ routing_rule_id }}' --required
AND region = '{{ region }}' --required
AND domainNameId = '{{ domainNameId }}'
;
```
</TabItem>
</Tabs>
