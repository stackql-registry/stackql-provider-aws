--- 
title: theme_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - theme_aliases
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>theme_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="theme_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.theme_aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_theme_alias"
    values={[
        { label: 'describe_theme_alias', value: 'describe_theme_alias' },
        { label: 'list_theme_aliases', value: 'list_theme_aliases' }
    ]}
>
<TabItem value="describe_theme_alias">

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
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="theme_alias" /></td>
    <td><code>object</code></td>
    <td>Information about the theme alias.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_theme_aliases">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="theme_alias_list" /></td>
    <td><code>array</code></td>
    <td>A structure containing the list of the theme's aliases.</td>
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
    <td><a href="#describe_theme_alias"><CopyableCode code="describe_theme_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-theme_id"><code>theme_id</code></a>, <a href="#parameter-alias_name"><code>alias_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the alias for a theme.</td>
</tr>
<tr>
    <td><a href="#list_theme_aliases"><CopyableCode code="list_theme_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-theme_id"><code>theme_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-result"><code>max-result</code></a></td>
    <td>Lists all the aliases of a theme.</td>
</tr>
<tr>
    <td><a href="#create_theme_alias"><CopyableCode code="create_theme_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-theme_id"><code>theme_id</code></a>, <a href="#parameter-alias_name"><code>alias_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ThemeVersionNumber"><code>ThemeVersionNumber</code></a></td>
    <td></td>
    <td>Creates a theme alias for a theme.</td>
</tr>
<tr>
    <td><a href="#update_theme_alias"><CopyableCode code="update_theme_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-theme_id"><code>theme_id</code></a>, <a href="#parameter-alias_name"><code>alias_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ThemeVersionNumber"><code>ThemeVersionNumber</code></a></td>
    <td></td>
    <td>Updates an alias of a theme.</td>
</tr>
<tr>
    <td><a href="#delete_theme_alias"><CopyableCode code="delete_theme_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-theme_id"><code>theme_id</code></a>, <a href="#parameter-alias_name"><code>alias_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the version of the theme that the specified theme alias points to. If you provide a specific alias, you delete the version of the theme that the alias points to.</td>
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
<tr id="parameter-alias_name">
    <td><CopyableCode code="alias_name" /></td>
    <td><code>string</code></td>
    <td>The unique name for the theme alias to delete.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the theme alias to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-theme_id">
    <td><CopyableCode code="theme_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the theme that the specified alias is for.</td>
</tr>
<tr id="parameter-max-result">
    <td><CopyableCode code="max-result" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_theme_alias"
    values={[
        { label: 'describe_theme_alias', value: 'describe_theme_alias' },
        { label: 'list_theme_aliases', value: 'list_theme_aliases' }
    ]}
>
<TabItem value="describe_theme_alias">

Describes the alias for a theme.

```sql
SELECT
request_id,
status,
theme_alias
FROM aws.quicksight.theme_aliases
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND theme_id = '{{ theme_id }}' -- required
AND alias_name = '{{ alias_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_theme_aliases">

Lists all the aliases of a theme.

```sql
SELECT
next_token,
request_id,
status,
theme_alias_list
FROM aws.quicksight.theme_aliases
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND theme_id = '{{ theme_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-result` = '{{ max-result }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_theme_alias"
    values={[
        { label: 'create_theme_alias', value: 'create_theme_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_theme_alias">

Creates a theme alias for a theme.

```sql
INSERT INTO aws.quicksight.theme_aliases (
ThemeVersionNumber,
aws_account_id,
theme_id,
alias_name,
region
)
SELECT 
{{ ThemeVersionNumber }} /* required */,
'{{ aws_account_id }}',
'{{ theme_id }}',
'{{ alias_name }}',
'{{ region }}'
RETURNING
request_id,
status,
theme_alias
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: theme_aliases
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the theme_aliases resource.
    - name: theme_id
      value: "{{ theme_id }}"
      description: Required parameter for the theme_aliases resource.
    - name: alias_name
      value: "{{ alias_name }}"
      description: Required parameter for the theme_aliases resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the theme_aliases resource.
    - name: ThemeVersionNumber
      value: {{ ThemeVersionNumber }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_theme_alias"
    values={[
        { label: 'update_theme_alias', value: 'update_theme_alias' }
    ]}
>
<TabItem value="update_theme_alias">

Updates an alias of a theme.

```sql
UPDATE aws.quicksight.theme_aliases
SET 
ThemeVersionNumber = {{ ThemeVersionNumber }}
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND theme_id = '{{ theme_id }}' --required
AND alias_name = '{{ alias_name }}' --required
AND region = '{{ region }}' --required
AND ThemeVersionNumber = '{{ ThemeVersionNumber }}' --required
RETURNING
request_id,
status,
theme_alias;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_theme_alias"
    values={[
        { label: 'delete_theme_alias', value: 'delete_theme_alias' }
    ]}
>
<TabItem value="delete_theme_alias">

Deletes the version of the theme that the specified theme alias points to. If you provide a specific alias, you delete the version of the theme that the alias points to.

```sql
DELETE FROM aws.quicksight.theme_aliases
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND theme_id = '{{ theme_id }}' --required
AND alias_name = '{{ alias_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
