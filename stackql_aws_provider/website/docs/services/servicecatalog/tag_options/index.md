--- 
title: tag_options
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_options
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>tag_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.tag_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tag_option"
    values={[
        { label: 'describe_tag_option', value: 'describe_tag_option' }
    ]}
>
<TabItem value="describe_tag_option">

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
    <td><CopyableCode code="Active" /></td>
    <td><code>boolean</code></td>
    <td>The TagOption active state.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The TagOption identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="Key" /></td>
    <td><code>string</code></td>
    <td>The TagOption key. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account Id of the owner account that created the TagOption.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The TagOption value. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_tag_option"><CopyableCode code="describe_tag_option" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified TagOption.</td>
</tr>
<tr>
    <td><a href="#create_tag_option"><CopyableCode code="create_tag_option" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a TagOption.</td>
</tr>
<tr>
    <td><a href="#associate_tag_option_with_resource"><CopyableCode code="associate_tag_option_with_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-TagOptionId"><code>TagOptionId</code></a></td>
    <td></td>
    <td>Associate the specified TagOption with the specified portfolio or product.</td>
</tr>
<tr>
    <td><a href="#update_tag_option"><CopyableCode code="update_tag_option" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified TagOption.</td>
</tr>
<tr>
    <td><a href="#delete_tag_option"><CopyableCode code="delete_tag_option" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified TagOption. You cannot delete a TagOption if it is associated with a product or portfolio.</td>
</tr>
<tr>
    <td><a href="#disassociate_tag_option_from_resource"><CopyableCode code="disassociate_tag_option_from_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-TagOptionId"><code>TagOptionId</code></a></td>
    <td></td>
    <td>Disassociates the specified TagOption from the specified resource.</td>
</tr>
<tr>
    <td><a href="#list_tag_options"><CopyableCode code="list_tag_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the specified TagOptions or all TagOptions.</td>
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
    defaultValue="describe_tag_option"
    values={[
        { label: 'describe_tag_option', value: 'describe_tag_option' }
    ]}
>
<TabItem value="describe_tag_option">

Gets information about the specified TagOption.

```sql
SELECT
Active,
Id,
Key,
Owner,
Value
FROM aws.servicecatalog.tag_options
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tag_option"
    values={[
        { label: 'create_tag_option', value: 'create_tag_option' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tag_option">

Creates a TagOption.

```sql
INSERT INTO aws.servicecatalog.tag_options (
Key,
Value,
region
)
SELECT 
'{{ Key }}',
'{{ Value }}',
'{{ region }}'
RETURNING
TagOptionDetail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tag_options
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tag_options resource.
    - name: Key
      value: "{{ Key }}"
      description: |
        The TagOption key.
    - name: Value
      value: "{{ Value }}"
      description: |
        The TagOption value.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_tag_option_with_resource"
    values={[
        { label: 'associate_tag_option_with_resource', value: 'associate_tag_option_with_resource' },
        { label: 'update_tag_option', value: 'update_tag_option' }
    ]}
>
<TabItem value="associate_tag_option_with_resource">

Associate the specified TagOption with the specified portfolio or product.

```sql
UPDATE aws.servicecatalog.tag_options
SET 
ResourceId = '{{ ResourceId }}',
TagOptionId = '{{ TagOptionId }}'
WHERE 
region = '{{ region }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND TagOptionId = '{{ TagOptionId }}' --required;
```
</TabItem>
<TabItem value="update_tag_option">

Updates the specified TagOption.

```sql
UPDATE aws.servicecatalog.tag_options
SET 
Id = '{{ Id }}',
Value = '{{ Value }}',
Active = {{ Active }}
WHERE 
region = '{{ region }}' --required
RETURNING
TagOptionDetail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tag_option"
    values={[
        { label: 'delete_tag_option', value: 'delete_tag_option' }
    ]}
>
<TabItem value="delete_tag_option">

Deletes the specified TagOption. You cannot delete a TagOption if it is associated with a product or portfolio.

```sql
DELETE FROM aws.servicecatalog.tag_options
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_tag_option_from_resource"
    values={[
        { label: 'disassociate_tag_option_from_resource', value: 'disassociate_tag_option_from_resource' },
        { label: 'list_tag_options', value: 'list_tag_options' }
    ]}
>
<TabItem value="disassociate_tag_option_from_resource">

Disassociates the specified TagOption from the specified resource.

```sql
EXEC aws.servicecatalog.tag_options.disassociate_tag_option_from_resource 
@region='{{ region }}' --required 
@@json=
'{
"ResourceId": "{{ ResourceId }}", 
"TagOptionId": "{{ TagOptionId }}"
}'
;
```
</TabItem>
<TabItem value="list_tag_options">

Lists the specified TagOptions or all TagOptions.

```sql
EXEC aws.servicecatalog.tag_options.list_tag_options 
@region='{{ region }}' --required 
@@json=
'{
"Filters": "{{ Filters }}", 
"PageSize": {{ PageSize }}, 
"PageToken": "{{ PageToken }}"
}'
;
```
</TabItem>
</Tabs>
