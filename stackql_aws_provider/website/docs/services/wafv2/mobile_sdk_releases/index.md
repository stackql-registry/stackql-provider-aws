--- 
title: mobile_sdk_releases
hide_title: false
hide_table_of_contents: false
keywords:
  - mobile_sdk_releases
  - wafv2
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

Creates, updates, deletes, gets or lists a <code>mobile_sdk_releases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mobile_sdk_releases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.mobile_sdk_releases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_mobile_sdk_release"
    values={[
        { label: 'get_mobile_sdk_release', value: 'get_mobile_sdk_release' },
        { label: 'list_mobile_sdk_releases', value: 'list_mobile_sdk_releases' }
    ]}
>
<TabItem value="get_mobile_sdk_release">

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
    <td><CopyableCode code="ReleaseNotes" /></td>
    <td><code>string</code></td>
    <td>Notes describing the release.</td>
</tr>
<tr>
    <td><CopyableCode code="ReleaseVersion" /></td>
    <td><code>string</code></td>
    <td>The release version. (pattern: &lt;code&gt;^&#91;\w#:\.\-/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Tags that are associated with the release.</td>
</tr>
<tr>
    <td><CopyableCode code="Timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the release.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_mobile_sdk_releases">

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
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReleaseSummaries" /></td>
    <td><code>array</code></td>
    <td>The high level information for the available SDK releases. If you specified a Limit in your request, this might not be the full list.</td>
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
    <td><a href="#get_mobile_sdk_release"><CopyableCode code="get_mobile_sdk_release" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information for the specified mobile SDK release, including release notes and tags. The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see WAF client application integration in the WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_mobile_sdk_releases"><CopyableCode code="list_mobile_sdk_releases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of the available releases for the mobile SDK and the specified device platform. The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see WAF client application integration in the WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#generate_mobile_sdk_release_url"><CopyableCode code="generate_mobile_sdk_release_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Platform"><code>Platform</code></a>, <a href="#parameter-ReleaseVersion"><code>ReleaseVersion</code></a></td>
    <td></td>
    <td>Generates a presigned download URL for the specified release of the mobile SDK. The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see WAF client application integration in the WAF Developer Guide.</td>
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
    defaultValue="get_mobile_sdk_release"
    values={[
        { label: 'get_mobile_sdk_release', value: 'get_mobile_sdk_release' },
        { label: 'list_mobile_sdk_releases', value: 'list_mobile_sdk_releases' }
    ]}
>
<TabItem value="get_mobile_sdk_release">

Retrieves information for the specified mobile SDK release, including release notes and tags. The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see WAF client application integration in the WAF Developer Guide.

```sql
SELECT
ReleaseNotes,
ReleaseVersion,
Tags,
Timestamp
FROM aws.wafv2.mobile_sdk_releases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_mobile_sdk_releases">

Retrieves a list of the available releases for the mobile SDK and the specified device platform. The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see WAF client application integration in the WAF Developer Guide.

```sql
SELECT
NextMarker,
ReleaseSummaries
FROM aws.wafv2.mobile_sdk_releases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="generate_mobile_sdk_release_url"
    values={[
        { label: 'generate_mobile_sdk_release_url', value: 'generate_mobile_sdk_release_url' }
    ]}
>
<TabItem value="generate_mobile_sdk_release_url">

Generates a presigned download URL for the specified release of the mobile SDK. The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see WAF client application integration in the WAF Developer Guide.

```sql
EXEC aws.wafv2.mobile_sdk_releases.generate_mobile_sdk_release_url 
@region='{{ region }}' --required 
@@json=
'{
"Platform": "{{ Platform }}", 
"ReleaseVersion": "{{ ReleaseVersion }}"
}'
;
```
</TabItem>
</Tabs>
