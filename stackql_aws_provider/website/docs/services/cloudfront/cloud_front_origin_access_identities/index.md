--- 
title: cloud_front_origin_access_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_front_origin_access_identities
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>cloud_front_origin_access_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_front_origin_access_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.cloud_front_origin_access_identities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_front_origin_access_identity"
    values={[
        { label: 'get_cloud_front_origin_access_identity', value: 'get_cloud_front_origin_access_identity' },
        { label: 'list_cloud_front_origin_access_identities', value: 'list_cloud_front_origin_access_identities' }
    ]}
>
<TabItem value="get_cloud_front_origin_access_identity">

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
    <td><CopyableCode code="cloud_front_origin_access_identity_config" /></td>
    <td><code>string</code></td>
    <td>The current configuration information for the identity.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID for the origin access identity, for example, E74FTE3AJFJ256A.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_canonical_user_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 canonical user ID for the origin access identity, used when giving the origin access identity read permission to an object in Amazon S3.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cloud_front_origin_access_identities">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more origin access identities remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more items in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains one CloudFrontOriginAccessIdentitySummary element for each origin access identity that was created by the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the Marker to the value of the NextMarker from the current page's response (which is also the ID of the last identity on that page).</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of origin access identities you want in the response body.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your origin access identities where they left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of CloudFront origin access identities that were created by the current Amazon Web Services account.</td>
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
    <td><a href="#get_cloud_front_origin_access_identity"><CopyableCode code="get_cloud_front_origin_access_identity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the information about an origin access identity.</td>
</tr>
<tr>
    <td><a href="#list_cloud_front_origin_access_identities"><CopyableCode code="list_cloud_front_origin_access_identities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists origin access identities.</td>
</tr>
<tr>
    <td><a href="#create_cloud_front_origin_access_identity"><CopyableCode code="create_cloud_front_origin_access_identity" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CloudFrontOriginAccessIdentityConfig"><code>CloudFrontOriginAccessIdentityConfig</code></a></td>
    <td></td>
    <td>Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see Serving Private Content through CloudFront in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_cloud_front_origin_access_identity"><CopyableCode code="update_cloud_front_origin_access_identity" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CloudFrontOriginAccessIdentityConfig"><code>CloudFrontOriginAccessIdentityConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Update an origin access identity.</td>
</tr>
<tr>
    <td><a href="#delete_cloud_front_origin_access_identity"><CopyableCode code="delete_cloud_front_origin_access_identity" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Delete an origin access identity.</td>
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
    <td>The origin access identity's ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The value of the ETag header you received from a previous GET or PUT request. For example: E2QWRUHAPOMQZL.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the Marker to the value of the NextMarker from the current page's response (which is also the ID of the last identity on that page).</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of origin access identities you want in the response body.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cloud_front_origin_access_identity"
    values={[
        { label: 'get_cloud_front_origin_access_identity', value: 'get_cloud_front_origin_access_identity' },
        { label: 'list_cloud_front_origin_access_identities', value: 'list_cloud_front_origin_access_identities' }
    ]}
>
<TabItem value="get_cloud_front_origin_access_identity">

Get the information about an origin access identity.

```sql
SELECT
cloud_front_origin_access_identity_config,
id,
s3_canonical_user_id
FROM aws.cloudfront.cloud_front_origin_access_identities
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cloud_front_origin_access_identities">

Lists origin access identities.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.cloud_front_origin_access_identities
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cloud_front_origin_access_identity"
    values={[
        { label: 'create_cloud_front_origin_access_identity', value: 'create_cloud_front_origin_access_identity' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_front_origin_access_identity">

Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see Serving Private Content through CloudFront in the Amazon CloudFront Developer Guide.

```sql
INSERT INTO aws.cloudfront.cloud_front_origin_access_identities (
CloudFrontOriginAccessIdentityConfig,
region
)
SELECT 
'{{ CloudFrontOriginAccessIdentityConfig }}' /* required */,
'{{ region }}'
RETURNING
cloud_front_origin_access_identity_config,
id,
s3_canonical_user_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_front_origin_access_identities
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_front_origin_access_identities resource.
    - name: CloudFrontOriginAccessIdentityConfig
      description: |
        Origin access identity configuration. Send a GET request to the /CloudFront API version/CloudFront/identity ID/config resource.
      value:
        CallerReference: "{{ CallerReference }}"
        Comment: "{{ Comment }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cloud_front_origin_access_identity"
    values={[
        { label: 'update_cloud_front_origin_access_identity', value: 'update_cloud_front_origin_access_identity' }
    ]}
>
<TabItem value="update_cloud_front_origin_access_identity">

Update an origin access identity.

```sql
UPDATE aws.cloudfront.cloud_front_origin_access_identities
SET 
CloudFrontOriginAccessIdentityConfig = '{{ CloudFrontOriginAccessIdentityConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND CloudFrontOriginAccessIdentityConfig = '{{ CloudFrontOriginAccessIdentityConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
cloud_front_origin_access_identity_config,
id,
s3_canonical_user_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cloud_front_origin_access_identity"
    values={[
        { label: 'delete_cloud_front_origin_access_identity', value: 'delete_cloud_front_origin_access_identity' }
    ]}
>
<TabItem value="delete_cloud_front_origin_access_identity">

Delete an origin access identity.

```sql
DELETE FROM aws.cloudfront.cloud_front_origin_access_identities
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>
