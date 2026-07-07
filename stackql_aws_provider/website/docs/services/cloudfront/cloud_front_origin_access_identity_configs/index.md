--- 
title: cloud_front_origin_access_identity_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_front_origin_access_identity_configs
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

Creates, updates, deletes, gets or lists a <code>cloud_front_origin_access_identity_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_front_origin_access_identity_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.cloud_front_origin_access_identity_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_front_origin_access_identity_config"
    values={[
        { label: 'get_cloud_front_origin_access_identity_config', value: 'get_cloud_front_origin_access_identity_config' }
    ]}
>
<TabItem value="get_cloud_front_origin_access_identity_config">

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
    <td><CopyableCode code="CallerReference" /></td>
    <td><code>string</code></td>
    <td>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed. If the value of CallerReference is new (regardless of the content of the CloudFrontOriginAccessIdentityConfig object), a new origin access identity is created. If the CallerReference is a value already sent in a previous identity request, and the content of the CloudFrontOriginAccessIdentityConfig is identical to the original request (ignoring white space), the response includes the same information returned to the original request. If the CallerReference is a value you already sent in a previous request to create an identity, but the content of the CloudFrontOriginAccessIdentityConfig is different from the original request, CloudFront returns a CloudFrontOriginAccessIdentityAlreadyExists error.</td>
</tr>
<tr>
    <td><CopyableCode code="Comment" /></td>
    <td><code>string</code></td>
    <td>A comment to describe the origin access identity. The comment cannot be longer than 128 characters.</td>
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
    <td><a href="#get_cloud_front_origin_access_identity_config"><CopyableCode code="get_cloud_front_origin_access_identity_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the configuration information about an origin access identity.</td>
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
    <td>The identity's ID.</td>
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
    defaultValue="get_cloud_front_origin_access_identity_config"
    values={[
        { label: 'get_cloud_front_origin_access_identity_config', value: 'get_cloud_front_origin_access_identity_config' }
    ]}
>
<TabItem value="get_cloud_front_origin_access_identity_config">

Get the configuration information about an origin access identity.

```sql
SELECT
CallerReference,
Comment
FROM aws.cloudfront.cloud_front_origin_access_identity_configs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
