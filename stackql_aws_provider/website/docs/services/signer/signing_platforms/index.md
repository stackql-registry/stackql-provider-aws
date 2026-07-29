--- 
title: signing_platforms
hide_title: false
hide_table_of_contents: false
keywords:
  - signing_platforms
  - signer
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

Creates, updates, deletes, gets or lists a <code>signing_platforms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signing_platforms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signer.signing_platforms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_signing_platform"
    values={[
        { label: 'get_signing_platform', value: 'get_signing_platform' },
        { label: 'list_signing_platforms', value: 'list_signing_platforms' }
    ]}
>
<TabItem value="get_signing_platform">

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
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category type of the target signing platform. (AWSIoT)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the target signing platform.</td>
</tr>
<tr>
    <td><CopyableCode code="max_size_in_mb" /></td>
    <td><code>integer</code></td>
    <td>The maximum size (in MB) of the payload that can be signed by the target platform.</td>
</tr>
<tr>
    <td><CopyableCode code="partner" /></td>
    <td><code>string</code></td>
    <td>A list of partner entities that use the target signing platform.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the target signing platform.</td>
</tr>
<tr>
    <td><CopyableCode code="revocation_supported" /></td>
    <td><code>boolean</code></td>
    <td>A flag indicating whether signatures generated for the signing platform can be revoked.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_configuration" /></td>
    <td><code>object</code></td>
    <td>A list of configurations applied to the target platform at signing.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_image_format" /></td>
    <td><code>object</code></td>
    <td>The format of the target platform's signing image.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The validation template that is used by the target signing platform.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_signing_platforms">

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
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of a signing platform. (AWSIoT)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of a signing platform.</td>
</tr>
<tr>
    <td><CopyableCode code="max_size_in_mb" /></td>
    <td><code>integer</code></td>
    <td>The maximum size (in MB) of code that can be signed by a signing platform.</td>
</tr>
<tr>
    <td><CopyableCode code="partner" /></td>
    <td><code>string</code></td>
    <td>Any partner entities linked to a signing platform.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a signing platform.</td>
</tr>
<tr>
    <td><CopyableCode code="revocation_supported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether revocation is supported for the platform.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration of a signing platform. This includes the designated hash algorithm and encryption algorithm of a signing platform.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_image_format" /></td>
    <td><code>object</code></td>
    <td>The image format of a AWS Signer platform or profile.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The types of targets that can be signed by a signing platform.</td>
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
    <td><a href="#get_signing_platform"><CopyableCode code="get_signing_platform" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-platform_id"><code>platform_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information on a specific signing platform.</td>
</tr>
<tr>
    <td><a href="#list_signing_platforms"><CopyableCode code="list_signing_platforms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-category"><code>category</code></a>, <a href="#parameter-partner"><code>partner</code></a>, <a href="#parameter-target"><code>target</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all signing platforms available in AWS Signer that match the request parameters. If additional jobs remain to be listed, Signer returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that Signer returns in the nextToken parameter until all of your signing jobs have been returned.</td>
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
<tr id="parameter-platform_id">
    <td><CopyableCode code="platform_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the target signing platform.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-category">
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category type of a signing platform.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned by this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of nextToken from the response that you just received.</td>
</tr>
<tr id="parameter-partner">
    <td><CopyableCode code="partner" /></td>
    <td><code>string</code></td>
    <td>Any partner entities connected to a signing platform.</td>
</tr>
<tr id="parameter-target">
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The validation template that is used by the target signing platform.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_signing_platform"
    values={[
        { label: 'get_signing_platform', value: 'get_signing_platform' },
        { label: 'list_signing_platforms', value: 'list_signing_platforms' }
    ]}
>
<TabItem value="get_signing_platform">

Returns information on a specific signing platform.

```sql
SELECT
category,
display_name,
max_size_in_mb,
partner,
platform_id,
revocation_supported,
signing_configuration,
signing_image_format,
target
FROM aws.signer.signing_platforms
WHERE platform_id = '{{ platform_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_signing_platforms">

Lists all signing platforms available in AWS Signer that match the request parameters. If additional jobs remain to be listed, Signer returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that Signer returns in the nextToken parameter until all of your signing jobs have been returned.

```sql
SELECT
category,
display_name,
max_size_in_mb,
partner,
platform_id,
revocation_supported,
signing_configuration,
signing_image_format,
target
FROM aws.signer.signing_platforms
WHERE region = '{{ region }}' -- required
AND category = '{{ category }}'
AND partner = '{{ partner }}'
AND target = '{{ target }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
