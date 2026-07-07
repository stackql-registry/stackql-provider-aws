--- 
title: objects
hide_title: false
hide_table_of_contents: false
keywords:
  - objects
  - mediastore_data
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

Creates, updates, deletes, gets or lists an <code>objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="objects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediastore_data.objects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_object"
    values={[
        { label: 'describe_object', value: 'describe_object' }
    ]}
>
<TabItem value="describe_object">

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
    <td><CopyableCode code="CacheControl" /></td>
    <td><code>string</code></td>
    <td>An optional CacheControl header that allows the caller to control the object's cache behavior. Headers can be passed in as specified in the HTTP at https:​//www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9. Headers with a custom user-defined value are also accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentLength" /></td>
    <td><code>integer (int64)</code></td>
    <td>The length of the object in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>The content type of the object. (pattern: &lt;code&gt;^&#91;\w\-\/\.\+&#93;&#123;1,255&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The ETag that represents a unique instance of the object. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the object was last modified.</td>
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
    <td><a href="#describe_object"><CopyableCode code="describe_object" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-path"><code>path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the headers for an object at the specified path.</td>
</tr>
<tr>
    <td><a href="#put_object"><CopyableCode code="put_object" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-path"><code>path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-Cache-Control"><code>Cache-Control</code></a>, <a href="#parameter-x-amz-storage-class"><code>x-amz-storage-class</code></a>, <a href="#parameter-x-amz-upload-availability"><code>x-amz-upload-availability</code></a></td>
    <td>Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.</td>
</tr>
<tr>
    <td><a href="#delete_object"><CopyableCode code="delete_object" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-path"><code>path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an object at the specified path.</td>
</tr>
<tr>
    <td><a href="#get_object"><CopyableCode code="get_object" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-path"><code>path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Range"><code>Range</code></a></td>
    <td>Downloads the object at the specified path. If the object’s upload availability is set to streaming, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.</td>
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
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt; For example, to upload the file mlaw.avi to the folder path premium\canada in the container movies, enter the path premium/canada/mlaw.avi. Do not include the container name in this path. If the path includes any folders that don't exist yet, the service creates them. For example, suppose you have an existing premium/usa subfolder. If you specify premium/canada, the service creates a canada subfolder in the premium folder. You then have two subfolders, usa and canada, in the premium folder. There is no correlation between the path to the source and the path (folders) in the container in AWS Elemental MediaStore. For more information about folders and how they exist in a container, see the AWS Elemental MediaStore User Guide. The file name is the name that is assigned to the file that you upload. The file can have the same name inside and outside of AWS Elemental MediaStore, or it can have the same name. The file name can include or omit an extension.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Cache-Control">
    <td><CopyableCode code="Cache-Control" /></td>
    <td><code>string</code></td>
    <td>An optional CacheControl header that allows the caller to control the object's cache behavior. Headers can be passed in as specified in the HTTP at https:​//www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9. Headers with a custom user-defined value are also accepted.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>The content type of the object.</td>
</tr>
<tr id="parameter-Range">
    <td><CopyableCode code="Range" /></td>
    <td><code>string</code></td>
    <td>The range bytes of an object to retrieve. For more information about the Range header, see http:​//www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35. AWS Elemental MediaStore ignores this header for partially uploaded objects that have streaming upload availability.</td>
</tr>
<tr id="parameter-x-amz-storage-class">
    <td><CopyableCode code="x-amz-storage-class" /></td>
    <td><code>string</code></td>
    <td>Indicates the storage class of a Put request. Defaults to high-performance temporal storage class, and objects are persisted into durable storage shortly after being received.</td>
</tr>
<tr id="parameter-x-amz-upload-availability">
    <td><CopyableCode code="x-amz-upload-availability" /></td>
    <td><code>string</code></td>
    <td>Indicates the availability of an object while it is still uploading. If the value is set to streaming, the object is available for downloading after some initial buffering but before the object is uploaded completely. If the value is set to standard, the object is available for downloading only when it is uploaded completely. The default value for this header is standard. To use this header, you must also set the HTTP Transfer-Encoding header to chunked.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_object"
    values={[
        { label: 'describe_object', value: 'describe_object' }
    ]}
>
<TabItem value="describe_object">

Gets the headers for an object at the specified path.

```sql
SELECT
CacheControl,
ContentLength,
ContentType,
ETag,
LastModified
FROM aws.mediastore_data.objects
WHERE path = '{{ path }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_object"
    values={[
        { label: 'put_object', value: 'put_object' }
    ]}
>
<TabItem value="put_object">

Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.

```sql
REPLACE aws.mediastore_data.objects
SET 
Body = '{{ Body }}'
WHERE 
path = '{{ path }}' --required
AND region = '{{ region }}' --required
AND `Content-Type` = '{{ Content-Type}}'
AND `Cache-Control` = '{{ Cache-Control}}'
AND `x-amz-storage-class` = '{{ x-amz-storage-class}}'
AND `x-amz-upload-availability` = '{{ x-amz-upload-availability}}'
RETURNING
ContentSHA256,
ETag,
StorageClass;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_object"
    values={[
        { label: 'delete_object', value: 'delete_object' }
    ]}
>
<TabItem value="delete_object">

Deletes an object at the specified path.

```sql
DELETE FROM aws.mediastore_data.objects
WHERE path = '{{ path }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_object"
    values={[
        { label: 'get_object', value: 'get_object' }
    ]}
>
<TabItem value="get_object">

Downloads the object at the specified path. If the object’s upload availability is set to streaming, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.

```sql
EXEC aws.mediastore_data.objects.get_object 
@path='{{ path }}' --required, 
@region='{{ region }}' --required, 
@Range='{{ Range }}'
;
```
</TabItem>
</Tabs>
