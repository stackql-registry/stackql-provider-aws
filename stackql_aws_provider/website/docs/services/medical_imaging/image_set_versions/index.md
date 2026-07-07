--- 
title: image_set_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - image_set_versions
  - medical_imaging
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

Creates, updates, deletes, gets or lists an <code>image_set_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_set_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medical_imaging.image_set_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_image_set_versions"
    values={[
        { label: 'list_image_set_versions', value: 'list_image_set_versions' }
    ]}
>
<TabItem value="list_image_set_versions">

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
    <td><CopyableCode code="ImageSetWorkflowStatus" /></td>
    <td><code>string</code></td>
    <td>The image set workflow status. (CREATED, COPIED, COPYING, COPYING_WITH_READ_ONLY_ACCESS, COPY_FAILED, UPDATING, UPDATING_FOR_STUDY_CONSISTENCY, UPDATED, UPDATE_FAILED, DELETING, DELETED, IMPORTING, IMPORTED, IMPORT_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the image set properties were created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the image set properties were deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="imageSetId" /></td>
    <td><code>string</code></td>
    <td>The image set identifier. (pattern: &lt;code&gt;&#91;0-9a-z&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="imageSetState" /></td>
    <td><code>string</code></td>
    <td>The image set state. (ACTIVE, LOCKED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="isPrimary" /></td>
    <td><code>boolean</code></td>
    <td>The flag to determine whether the image set is primary or not.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The error message thrown if an image set action fails. (pattern: &lt;code&gt;&#91;\w -:`&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="overrides" /></td>
    <td><code>object</code></td>
    <td>Contains details on overrides used when creating the returned version of an image set. For example, if forced exists, the forced flag was used when creating the image set.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the image set properties were updated.</td>
</tr>
<tr>
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>The image set version identifier. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
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
    <td><a href="#list_image_set_versions"><CopyableCode code="list_image_set_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-image_set_id"><code>image_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List image set versions.</td>
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
<tr id="parameter-datastore_id">
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The data store identifier.</td>
</tr>
<tr id="parameter-image_set_id">
    <td><CopyableCode code="image_set_id" /></td>
    <td><code>string</code></td>
    <td>The image set identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The max results count.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to request the list of image set versions on the next page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_image_set_versions"
    values={[
        { label: 'list_image_set_versions', value: 'list_image_set_versions' }
    ]}
>
<TabItem value="list_image_set_versions">

List image set versions.

```sql
SELECT
ImageSetWorkflowStatus,
createdAt,
deletedAt,
imageSetId,
imageSetState,
isPrimary,
message,
overrides,
updatedAt,
versionId
FROM aws.medical_imaging.image_set_versions
WHERE datastore_id = '{{ datastore_id }}' -- required
AND image_set_id = '{{ image_set_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
