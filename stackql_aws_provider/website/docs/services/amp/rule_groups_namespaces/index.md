--- 
title: rule_groups_namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_groups_namespaces
  - amp
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

Creates, updates, deletes, gets or lists a <code>rule_groups_namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rule_groups_namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amp.rule_groups_namespaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_rule_groups_namespace"
    values={[
        { label: 'describe_rule_groups_namespace', value: 'describe_rule_groups_namespace' },
        { label: 'list_rule_groups_namespaces', value: 'list_rule_groups_namespaces' }
    ]}
>
<TabItem value="describe_rule_groups_namespace">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace that the rule group belong to. (pattern: &lt;code&gt;.*&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the rule groups namespace. For example, arn:aws:aps:<code>&lt;region&gt;</code>:123456789012:rulegroupsnamespace/ws-example1-1234-abcd-5678-ef90abcd1234/rulesfile1.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the rule groups namespace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The rule groups namespace data.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the rule groups namespace was most recently changed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the rule groups namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of tag keys and values that are associated with the rule groups namespace.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rule_groups_namespaces">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace that the rule group belong to. (pattern: &lt;code&gt;.*&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the rule groups namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the rule groups namespace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the rule groups namespace was most recently changed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>A structure that displays the current status of the rule groups namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of tag keys and values that are associated with the rule groups namespace.</td>
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
    <td><a href="#describe_rule_groups_namespace"><CopyableCode code="describe_rule_groups_namespace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns complete information about one rule groups namespace. To retrieve a list of rule groups namespaces, use ListRuleGroupsNamespaces.</td>
</tr>
<tr>
    <td><a href="#list_rule_groups_namespaces"><CopyableCode code="list_rule_groups_namespaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of rule groups namespaces in a workspace.</td>
</tr>
<tr>
    <td><a href="#create_rule_groups_namespace"><CopyableCode code="create_rule_groups_namespace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>The CreateRuleGroupsNamespace operation creates a rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. The combined length of a rule group namespace and a rule group name cannot exceed 721 UTF-8 bytes. Use this operation only to create new rule groups namespaces. To update an existing rule groups namespace, use PutRuleGroupsNamespace.</td>
</tr>
<tr>
    <td><a href="#put_rule_groups_namespace"><CopyableCode code="put_rule_groups_namespace" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates an existing rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. The combined length of a rule group namespace and a rule group name cannot exceed 721 UTF-8 bytes. Use this operation only to update existing rule groups namespaces. To create a new rule groups namespace, use CreateRuleGroupsNamespace. You can't use this operation to add tags to an existing rule groups namespace. Instead, use TagResource.</td>
</tr>
<tr>
    <td><a href="#delete_rule_groups_namespace"><CopyableCode code="delete_rule_groups_namespace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes one rule groups namespace and its associated rule groups definition.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule groups namespace to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace containing the rule groups namespace and definition to delete.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. The default is 100.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Use this parameter to filter the rule groups namespaces that are returned. Only the namespaces with names that begin with the value that you specify are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. You receive this token from a previous call, and use it to get the next page of results. The other parameters must be the same as the initial call. For example, if your initial request has maxResults of 10, and there are 12 rule groups namespaces to return, then your initial request will return 10 and a nextToken. Using the next token in a subsequent call will return the remaining 2 namespaces.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_rule_groups_namespace"
    values={[
        { label: 'describe_rule_groups_namespace', value: 'describe_rule_groups_namespace' },
        { label: 'list_rule_groups_namespaces', value: 'list_rule_groups_namespaces' }
    ]}
>
<TabItem value="describe_rule_groups_namespace">

Returns complete information about one rule groups namespace. To retrieve a list of rule groups namespaces, use ListRuleGroupsNamespaces.

```sql
SELECT
name,
arn,
created_at,
data,
modified_at,
status,
tags
FROM aws.amp.rule_groups_namespaces
WHERE workspace_id = '{{ workspace_id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rule_groups_namespaces">

Returns a list of rule groups namespaces in a workspace.

```sql
SELECT
name,
arn,
created_at,
modified_at,
status,
tags
FROM aws.amp.rule_groups_namespaces
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
AND name = '{{ name }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule_groups_namespace"
    values={[
        { label: 'create_rule_groups_namespace', value: 'create_rule_groups_namespace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule_groups_namespace">

The CreateRuleGroupsNamespace operation creates a rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. The combined length of a rule group namespace and a rule group name cannot exceed 721 UTF-8 bytes. Use this operation only to create new rule groups namespaces. To update an existing rule groups namespace, use PutRuleGroupsNamespace.

```sql
INSERT INTO aws.amp.rule_groups_namespaces (
name,
data,
clientToken,
tags,
workspace_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ data }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ workspace_id }}',
'{{ region }}'
RETURNING
name,
arn,
status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rule_groups_namespaces
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the rule_groups_namespaces resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rule_groups_namespaces resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the namespace that the rule group belong to.
    - name: data
      value: "{{ data }}"
      description: |
        The rule groups namespace data.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        An identifier used to ensure the idempotency of a write request.
    - name: tags
      value: "{{ tags }}"
      description: |
        A tag associated with a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_rule_groups_namespace"
    values={[
        { label: 'put_rule_groups_namespace', value: 'put_rule_groups_namespace' }
    ]}
>
<TabItem value="put_rule_groups_namespace">

Updates an existing rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. The combined length of a rule group namespace and a rule group name cannot exceed 721 UTF-8 bytes. Use this operation only to update existing rule groups namespaces. To create a new rule groups namespace, use CreateRuleGroupsNamespace. You can't use this operation to add tags to an existing rule groups namespace. Instead, use TagResource.

```sql
REPLACE aws.amp.rule_groups_namespaces
SET 
data = '{{ data }}',
clientToken = '{{ clientToken }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND data = '{{ data }}' --required
RETURNING
name,
arn,
status,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule_groups_namespace"
    values={[
        { label: 'delete_rule_groups_namespace', value: 'delete_rule_groups_namespace' }
    ]}
>
<TabItem value="delete_rule_groups_namespace">

Deletes one rule groups namespace and its associated rule groups definition.

```sql
DELETE FROM aws.amp.rule_groups_namespaces
WHERE workspace_id = '{{ workspace_id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
