--- 
title: reference_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_metadatas
  - omics
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

Creates, updates, deletes, gets or lists a <code>reference_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reference_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.reference_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reference_metadata"
    values={[
        { label: 'get_reference_metadata', value: 'get_reference_metadata' }
    ]}
>
<TabItem value="get_reference_metadata">

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
    <td>The reference's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The reference's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The reference's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationJobId" /></td>
    <td><code>string</code></td>
    <td>The reference's creation job ID. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the reference was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creationType" /></td>
    <td><code>string</code></td>
    <td>The reference's creation type. (IMPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The reference's description. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>object</code></td>
    <td>The reference's files.</td>
</tr>
<tr>
    <td><CopyableCode code="md5" /></td>
    <td><code>string</code></td>
    <td>The reference's MD5 checksum. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;N&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="referenceStoreId" /></td>
    <td><code>string</code></td>
    <td>The reference's reference store ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The reference's status. (ACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the reference was updated.</td>
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
    <td><a href="#get_reference_metadata"><CopyableCode code="get_reference_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-reference_store_id"><code>reference_store_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata for a reference genome. This operation returns the number of parts, part size, and MD5 of an entire file. This operation does not return tags. To retrieve the list of tags for a read set, use the ListTagsForResource API operation.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The reference's ID.</td>
</tr>
<tr id="parameter-reference_store_id">
    <td><CopyableCode code="reference_store_id" /></td>
    <td><code>string</code></td>
    <td>The reference's reference store ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_reference_metadata"
    values={[
        { label: 'get_reference_metadata', value: 'get_reference_metadata' }
    ]}
>
<TabItem value="get_reference_metadata">

Retrieves metadata for a reference genome. This operation returns the number of parts, part size, and MD5 of an entire file. This operation does not return tags. To retrieve the list of tags for a read set, use the ListTagsForResource API operation.

```sql
SELECT
id,
name,
arn,
creationJobId,
creationTime,
creationType,
description,
files,
md5,
referenceStoreId,
status,
updateTime
FROM aws.omics.reference_metadatas
WHERE id = '{{ id }}' -- required
AND reference_store_id = '{{ reference_store_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
