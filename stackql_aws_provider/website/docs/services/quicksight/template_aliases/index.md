--- 
title: template_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - template_aliases
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

Creates, updates, deletes, gets or lists a <code>template_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.template_aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_template_alias"
    values={[
        { label: 'describe_template_alias', value: 'describe_template_alias' },
        { label: 'list_template_aliases', value: 'list_template_aliases' }
    ]}
>
<TabItem value="describe_template_alias">

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
    <td><CopyableCode code="template_alias" /></td>
    <td><code>object</code></td>
    <td>Information about the template alias.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_template_aliases">

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
    <td><CopyableCode code="alias_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the template alias. (pattern: &lt;code&gt;&#91;\w\-&#93;+|(\$LATEST)|(\$PUBLISHED)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the template alias.</td>
</tr>
<tr>
    <td><CopyableCode code="template_version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the template alias.</td>
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
    <td><a href="#describe_template_alias"><CopyableCode code="describe_template_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-alias_name"><code>alias_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the template alias for a template.</td>
</tr>
<tr>
    <td><a href="#list_template_aliases"><CopyableCode code="list_template_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-result"><code>max-result</code></a></td>
    <td>Lists all the aliases of a template.</td>
</tr>
<tr>
    <td><a href="#create_template_alias"><CopyableCode code="create_template_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-alias_name"><code>alias_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TemplateVersionNumber"><code>TemplateVersionNumber</code></a></td>
    <td></td>
    <td>Creates a template alias for a template.</td>
</tr>
<tr>
    <td><a href="#update_template_alias"><CopyableCode code="update_template_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-alias_name"><code>alias_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TemplateVersionNumber"><code>TemplateVersionNumber</code></a></td>
    <td></td>
    <td>Updates the template alias of a template.</td>
</tr>
<tr>
    <td><a href="#delete_template_alias"><CopyableCode code="delete_template_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-alias_name"><code>alias_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the item that the specified template alias points to. If you provide a specific alias, you delete the version of the template that the alias points to.</td>
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
    <td>The name for the template alias. To delete a specific alias, you delete the version that the alias points to. You can specify the alias name, or specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the item to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the template that the specified alias is for.</td>
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
    defaultValue="describe_template_alias"
    values={[
        { label: 'describe_template_alias', value: 'describe_template_alias' },
        { label: 'list_template_aliases', value: 'list_template_aliases' }
    ]}
>
<TabItem value="describe_template_alias">

Describes the template alias for a template.

```sql
SELECT
request_id,
status,
template_alias
FROM aws.quicksight.template_aliases
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND template_id = '{{ template_id }}' -- required
AND alias_name = '{{ alias_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_template_aliases">

Lists all the aliases of a template.

```sql
SELECT
alias_name,
arn,
template_version_number
FROM aws.quicksight.template_aliases
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND template_id = '{{ template_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-result` = '{{ max-result }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_template_alias"
    values={[
        { label: 'create_template_alias', value: 'create_template_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_template_alias">

Creates a template alias for a template.

```sql
INSERT INTO aws.quicksight.template_aliases (
TemplateVersionNumber,
aws_account_id,
template_id,
alias_name,
region
)
SELECT 
{{ TemplateVersionNumber }} /* required */,
'{{ aws_account_id }}',
'{{ template_id }}',
'{{ alias_name }}',
'{{ region }}'
RETURNING
request_id,
status,
template_alias
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: template_aliases
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the template_aliases resource.
    - name: template_id
      value: "{{ template_id }}"
      description: Required parameter for the template_aliases resource.
    - name: alias_name
      value: "{{ alias_name }}"
      description: Required parameter for the template_aliases resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the template_aliases resource.
    - name: TemplateVersionNumber
      value: {{ TemplateVersionNumber }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_template_alias"
    values={[
        { label: 'update_template_alias', value: 'update_template_alias' }
    ]}
>
<TabItem value="update_template_alias">

Updates the template alias of a template.

```sql
UPDATE aws.quicksight.template_aliases
SET 
TemplateVersionNumber = {{ TemplateVersionNumber }}
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND template_id = '{{ template_id }}' --required
AND alias_name = '{{ alias_name }}' --required
AND region = '{{ region }}' --required
AND TemplateVersionNumber = '{{ TemplateVersionNumber }}' --required
RETURNING
request_id,
status,
template_alias;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_template_alias"
    values={[
        { label: 'delete_template_alias', value: 'delete_template_alias' }
    ]}
>
<TabItem value="delete_template_alias">

Deletes the item that the specified template alias points to. If you provide a specific alias, you delete the version of the template that the alias points to.

```sql
DELETE FROM aws.quicksight.template_aliases
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND template_id = '{{ template_id }}' --required
AND alias_name = '{{ alias_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
