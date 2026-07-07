--- 
title: streaming_distribution_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - streaming_distribution_configs
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

Creates, updates, deletes, gets or lists a <code>streaming_distribution_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streaming_distribution_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.streaming_distribution_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_streaming_distribution_config"
    values={[
        { label: 'get_streaming_distribution_config', value: 'get_streaming_distribution_config' }
    ]}
>
<TabItem value="get_streaming_distribution_config">

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
    <td><CopyableCode code="Aliases" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="CallerReference" /></td>
    <td><code>string</code></td>
    <td>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed. If the value of CallerReference is new (regardless of the content of the StreamingDistributionConfig object), CloudFront creates a new distribution. If CallerReference is a value that you already sent in a previous request to create a distribution, CloudFront returns a DistributionAlreadyExists error.</td>
</tr>
<tr>
    <td><CopyableCode code="Comment" /></td>
    <td><code>string</code></td>
    <td>Any comments you want to include about the streaming distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the streaming distribution is enabled to accept user requests for content.</td>
</tr>
<tr>
    <td><CopyableCode code="Logging" /></td>
    <td><code>string</code></td>
    <td>A complex type that controls whether access logs are written for the streaming distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="PriceClass" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains information about price class for this streaming distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="S3Origin" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="TrustedSigners" /></td>
    <td><code>string</code></td>
    <td>A complex type that specifies any Amazon Web Services accounts that you want to permit to create signed URLs for private content. If you want the distribution to use signed URLs, include this element; if you want the distribution to use public URLs, remove this element. For more information, see Serving Private Content through CloudFront in the Amazon CloudFront Developer Guide.</td>
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
    <td><a href="#get_streaming_distribution_config"><CopyableCode code="get_streaming_distribution_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the configuration information about a streaming distribution.</td>
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
    <td>The streaming distribution's ID.</td>
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
    defaultValue="get_streaming_distribution_config"
    values={[
        { label: 'get_streaming_distribution_config', value: 'get_streaming_distribution_config' }
    ]}
>
<TabItem value="get_streaming_distribution_config">

Get the configuration information about a streaming distribution.

```sql
SELECT
Aliases,
CallerReference,
Comment,
Enabled,
Logging,
PriceClass,
S3Origin,
TrustedSigners
FROM aws.cloudfront.streaming_distribution_configs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
