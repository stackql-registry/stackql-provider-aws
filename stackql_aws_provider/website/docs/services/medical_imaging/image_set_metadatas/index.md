--- 
title: image_set_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - image_set_metadatas
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

Creates, updates, deletes, gets or lists an <code>image_set_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_set_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medical_imaging.image_set_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_image_set_metadata"
    values={[
        { label: 'get_image_set_metadata', value: 'get_image_set_metadata' }
    ]}
>
<TabItem value="get_image_set_metadata">

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
    <td><CopyableCode code="content_encoding" /></td>
    <td><code>string</code></td>
    <td>The compression format in which image set metadata attributes are returned.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The format in which the study metadata is returned to the customer. Default is text/plain.</td>
</tr>
<tr>
    <td><CopyableCode code="image_set_metadata_blob" /></td>
    <td><code>string (byte)</code></td>
    <td>The blob containing the aggregated metadata information for the image set.</td>
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
    <td><a href="#get_image_set_metadata"><CopyableCode code="get_image_set_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-image_set_id"><code>image_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Get metadata attributes for an image set.</td>
</tr>
<tr>
    <td><a href="#update_image_set_metadata"><CopyableCode code="update_image_set_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-image_set_id"><code>image_set_id</code></a>, <a href="#parameter-latestVersion"><code>latestVersion</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-updateImageSetMetadataUpdates"><code>updateImageSetMetadataUpdates</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-includeStudyImageSets"><code>includeStudyImageSets</code></a></td>
    <td>Update image set metadata attributes.</td>
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
<tr id="parameter-latestVersion">
    <td><CopyableCode code="latestVersion" /></td>
    <td><code>string</code></td>
    <td>The latest image set version identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Setting this flag will force the UpdateImageSetMetadata operation for the following attributes: Tag.StudyInstanceUID, Tag.SeriesInstanceUID, Tag.SOPInstanceUID, and Tag.StudyID Adding, removing, or updating private tags for an individual SOP Instance</td>
</tr>
<tr id="parameter-includeStudyImageSets">
    <td><CopyableCode code="includeStudyImageSets" /></td>
    <td><code>boolean</code></td>
    <td>Flag to apply the metadata updates to all image sets in the same Study as the requested image set ID.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The image set version identifier.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_image_set_metadata"
    values={[
        { label: 'get_image_set_metadata', value: 'get_image_set_metadata' }
    ]}
>
<TabItem value="get_image_set_metadata">

Get metadata attributes for an image set.

```sql
SELECT
content_encoding,
content_type,
image_set_metadata_blob
FROM aws.medical_imaging.image_set_metadatas
WHERE datastore_id = '{{ datastore_id }}' -- required
AND image_set_id = '{{ image_set_id }}' -- required
AND region = '{{ region }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_image_set_metadata"
    values={[
        { label: 'update_image_set_metadata', value: 'update_image_set_metadata' }
    ]}
>
<TabItem value="update_image_set_metadata">

Update image set metadata attributes.

```sql
UPDATE aws.medical_imaging.image_set_metadatas
SET 
updateImageSetMetadataUpdates = '{{ updateImageSetMetadataUpdates }}'
WHERE 
datastore_id = '{{ datastore_id }}' --required
AND image_set_id = '{{ image_set_id }}' --required
AND latestVersion = '{{ latestVersion }}' --required
AND region = '{{ region }}' --required
AND updateImageSetMetadataUpdates = '{{ updateImageSetMetadataUpdates }}' --required
AND force = {{ force}}
AND includeStudyImageSets = {{ includeStudyImageSets}}
RETURNING
created_at,
datastore_id,
image_set_id,
image_set_state,
image_set_workflow_status,
latest_version_id,
message,
updated_at;
```
</TabItem>
</Tabs>
