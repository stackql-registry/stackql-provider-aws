--- 
title: lf_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - lf_tags
  - lakeformation
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

Creates, updates, deletes, gets or lists a <code>lf_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lf_tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.lf_tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lf_tag"
    values={[
        { label: 'get_lf_tag', value: 'get_lf_tag' },
        { label: 'list_lf_tags', value: 'list_lf_tags' }
    ]}
>
<TabItem value="get_lf_tag">

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
    <td><CopyableCode code="CatalogId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TagKey" /></td>
    <td><code>string</code></td>
    <td>The key-name for the LF-tag. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@%&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A list of possible values an attribute can take.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_lf_tags">

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
    <td><CopyableCode code="CatalogId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TagKey" /></td>
    <td><code>string</code></td>
    <td>The key-name for the LF-tag. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@%&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A list of possible values an attribute can take.</td>
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
    <td><a href="#get_lf_tag"><CopyableCode code="get_lf_tag" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an LF-tag definition.</td>
</tr>
<tr>
    <td><a href="#list_lf_tags"><CopyableCode code="list_lf_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists LF-tags that the requester has permission to view.</td>
</tr>
<tr>
    <td><a href="#create_lf_tag"><CopyableCode code="create_lf_tag" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TagKey"><code>TagKey</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a></td>
    <td></td>
    <td>Creates an LF-tag with the specified name and values.</td>
</tr>
<tr>
    <td><a href="#update_lf_tag"><CopyableCode code="update_lf_tag" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TagKey"><code>TagKey</code></a></td>
    <td></td>
    <td>Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value.</td>
</tr>
<tr>
    <td><a href="#delete_lf_tag"><CopyableCode code="delete_lf_tag" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an LF-tag by its key name. The operation fails if the specified tag key doesn't exist. When you delete an LF-Tag: The associated LF-Tag policy becomes invalid. Resources that had this tag assigned will no longer have the tag policy applied to them.</td>
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
    defaultValue="get_lf_tag"
    values={[
        { label: 'get_lf_tag', value: 'get_lf_tag' },
        { label: 'list_lf_tags', value: 'list_lf_tags' }
    ]}
>
<TabItem value="get_lf_tag">

Returns an LF-tag definition.

```sql
SELECT
CatalogId,
TagKey,
TagValues
FROM aws.lakeformation.lf_tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_lf_tags">

Lists LF-tags that the requester has permission to view.

```sql
SELECT
CatalogId,
TagKey,
TagValues
FROM aws.lakeformation.lf_tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_lf_tag"
    values={[
        { label: 'create_lf_tag', value: 'create_lf_tag' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_lf_tag">

Creates an LF-tag with the specified name and values.

```sql
INSERT INTO aws.lakeformation.lf_tags (
CatalogId,
TagKey,
TagValues,
region
)
SELECT 
'{{ CatalogId }}',
'{{ TagKey }}' /* required */,
'{{ TagValues }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lf_tags
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lf_tags resource.
    - name: CatalogId
      value: "{{ CatalogId }}"
    - name: TagKey
      value: "{{ TagKey }}"
    - name: TagValues
      value:
        - "{{ TagValues }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_lf_tag"
    values={[
        { label: 'update_lf_tag', value: 'update_lf_tag' }
    ]}
>
<TabItem value="update_lf_tag">

Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value.

```sql
UPDATE aws.lakeformation.lf_tags
SET 
CatalogId = '{{ CatalogId }}',
TagKey = '{{ TagKey }}',
TagValuesToDelete = '{{ TagValuesToDelete }}',
TagValuesToAdd = '{{ TagValuesToAdd }}'
WHERE 
region = '{{ region }}' --required
AND TagKey = '{{ TagKey }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lf_tag"
    values={[
        { label: 'delete_lf_tag', value: 'delete_lf_tag' }
    ]}
>
<TabItem value="delete_lf_tag">

Deletes an LF-tag by its key name. The operation fails if the specified tag key doesn't exist. When you delete an LF-Tag: The associated LF-Tag policy becomes invalid. Resources that had this tag assigned will no longer have the tag policy applied to them.

```sql
DELETE FROM aws.lakeformation.lf_tags
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
