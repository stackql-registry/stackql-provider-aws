--- 
title: image_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - image_sets
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

Creates, updates, deletes, gets or lists an <code>image_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medical_imaging.image_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_image_set"
    values={[
        { label: 'get_image_set', value: 'get_image_set' },
        { label: 'search_image_sets', value: 'search_image_sets' }
    ]}
>
<TabItem value="get_image_set">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when image set properties were created.</td>
</tr>
<tr>
    <td><CopyableCode code="datastoreId" /></td>
    <td><code>string</code></td>
    <td>The data store identifier. (pattern: &lt;code&gt;&#91;0-9a-z&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="deletedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the image set properties were deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="imageSetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) assigned to the image set. (pattern: &lt;code&gt;arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:medical-imaging:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:datastore/&#91;0-9a-z&#93;&#123;32&#125;(/imageset/&#91;0-9a-z&#93;&#123;32&#125;)?&lt;/code&gt;)</td>
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
    <td><CopyableCode code="imageSetWorkflowStatus" /></td>
    <td><code>string</code></td>
    <td>The image set workflow status. (CREATED, COPIED, COPYING, COPYING_WITH_READ_ONLY_ACCESS, COPY_FAILED, UPDATING, UPDATING_FOR_STUDY_CONSISTENCY, UPDATED, UPDATE_FAILED, DELETING, DELETED, IMPORTING, IMPORTED, IMPORT_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="isPrimary" /></td>
    <td><code>boolean</code></td>
    <td>The flag to determine whether the image set is primary or not.</td>
</tr>
<tr>
    <td><CopyableCode code="lastAccessedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the image set was last accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The error message thrown if an image set action fails. (pattern: &lt;code&gt;&#91;\w -:`&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="overrides" /></td>
    <td><code>object</code></td>
    <td>This object contains the details of any overrides used while creating a specific image set version. If an image set was copied or updated using the force flag, this object will contain the forced flag.</td>
</tr>
<tr>
    <td><CopyableCode code="storageTier" /></td>
    <td><code>string</code></td>
    <td>The storage tier of the image set. (FREQUENT_ACCESS, ARCHIVE_INSTANT_ACCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when image set properties were updated.</td>
</tr>
<tr>
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>The image set version identifier. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_image_sets">

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
    <td><CopyableCode code="DICOMTags" /></td>
    <td><code>object</code></td>
    <td>The DICOM tags associated with the image set.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time an image set is created. Sample creation date is provided in 1985-04-12T23:20:50.52Z format.</td>
</tr>
<tr>
    <td><CopyableCode code="imageSetId" /></td>
    <td><code>string</code></td>
    <td>The image set identifier. (pattern: &lt;code&gt;&#91;0-9a-z&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="isPrimary" /></td>
    <td><code>boolean</code></td>
    <td>The flag to determine whether the image set is primary or not.</td>
</tr>
<tr>
    <td><CopyableCode code="lastAccessedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the image set was last accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="storageTier" /></td>
    <td><code>string</code></td>
    <td>The image set's storage tier. (FREQUENT_ACCESS, ARCHIVE_INSTANT_ACCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time an image set was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The image set version.</td>
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
    <td><a href="#get_image_set"><CopyableCode code="get_image_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-image_set_id"><code>image_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Get image set properties.</td>
</tr>
<tr>
    <td><a href="#search_image_sets"><CopyableCode code="search_image_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Search image sets based on defined input attributes. SearchImageSets accepts a single search query parameter and returns a paginated response of all image sets that have the matching criteria. All date range queries must be input as (lowerBound, upperBound). By default, SearchImageSets uses the updatedAt field for sorting in descending order from newest to oldest.</td>
</tr>
<tr>
    <td><a href="#delete_image_set"><CopyableCode code="delete_image_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-image_set_id"><code>image_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an image set.</td>
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
    <td>The maximum number of results that can be returned in a search.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token used for pagination of results returned in the response. Use the token returned from the previous request to continue results where the previous request ended.</td>
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
    defaultValue="get_image_set"
    values={[
        { label: 'get_image_set', value: 'get_image_set' },
        { label: 'search_image_sets', value: 'search_image_sets' }
    ]}
>
<TabItem value="get_image_set">

Get image set properties.

```sql
SELECT
createdAt,
datastoreId,
deletedAt,
imageSetArn,
imageSetId,
imageSetState,
imageSetWorkflowStatus,
isPrimary,
lastAccessedAt,
message,
overrides,
storageTier,
updatedAt,
versionId
FROM aws.medical_imaging.image_sets
WHERE datastore_id = '{{ datastore_id }}' -- required
AND image_set_id = '{{ image_set_id }}' -- required
AND region = '{{ region }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
<TabItem value="search_image_sets">

Search image sets based on defined input attributes. SearchImageSets accepts a single search query parameter and returns a paginated response of all image sets that have the matching criteria. All date range queries must be input as (lowerBound, upperBound). By default, SearchImageSets uses the updatedAt field for sorting in descending order from newest to oldest.

```sql
SELECT
DICOMTags,
createdAt,
imageSetId,
isPrimary,
lastAccessedAt,
storageTier,
updatedAt,
version
FROM aws.medical_imaging.image_sets
WHERE datastore_id = '{{ datastore_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_image_set"
    values={[
        { label: 'delete_image_set', value: 'delete_image_set' }
    ]}
>
<TabItem value="delete_image_set">

Delete an image set.

```sql
DELETE FROM aws.medical_imaging.image_sets
WHERE datastore_id = '{{ datastore_id }}' --required
AND image_set_id = '{{ image_set_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
