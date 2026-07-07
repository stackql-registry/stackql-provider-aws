--- 
title: layer_version_by_arns
hide_title: false
hide_table_of_contents: false
keywords:
  - layer_version_by_arns
  - lambda
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

Creates, updates, deletes, gets or lists a <code>layer_version_by_arns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="layer_version_by_arns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.layer_version_by_arns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_layer_version_by_arn"
    values={[
        { label: 'get_layer_version_by_arn', value: 'get_layer_version_by_arn' }
    ]}
>
<TabItem value="get_layer_version_by_arn">

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
    <td><CopyableCode code="CompatibleArchitectures" /></td>
    <td><code>array</code></td>
    <td>A list of compatible instruction set architectures.</td>
</tr>
<tr>
    <td><CopyableCode code="CompatibleRuntimes" /></td>
    <td><code>array</code></td>
    <td>The layer's compatible runtimes. The following list includes deprecated runtimes. For more information, see Runtime use after deprecation. For a list of all currently supported runtimes, see Supported runtimes.</td>
</tr>
<tr>
    <td><CopyableCode code="Content" /></td>
    <td><code>object</code></td>
    <td>Details about the layer version.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string</code></td>
    <td>The date that the layer version was created, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the version.</td>
</tr>
<tr>
    <td><CopyableCode code="LayerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the layer. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:lambda:&#91;a-zA-Z0-9-&#93;+:\d&#123;12&#125;:layer:&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LayerVersionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the layer version. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:lambda:&#91;a-zA-Z0-9-&#93;+:\d&#123;12&#125;:layer:&#91;a-zA-Z0-9-_&#93;+:&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseInfo" /></td>
    <td><code>string</code></td>
    <td>The layer's software license.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number.</td>
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
    <td><a href="#get_layer_version_by_arn"><CopyableCode code="get_layer_version_by_arn" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Arn"><code>Arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a version of an Lambda layer, with a link to download the layer archive that's valid for 10 minutes.</td>
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
<tr id="parameter-Arn">
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the layer version.</td>
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
    defaultValue="get_layer_version_by_arn"
    values={[
        { label: 'get_layer_version_by_arn', value: 'get_layer_version_by_arn' }
    ]}
>
<TabItem value="get_layer_version_by_arn">

Returns information about a version of an Lambda layer, with a link to download the layer archive that's valid for 10 minutes.

```sql
SELECT
CompatibleArchitectures,
CompatibleRuntimes,
Content,
CreatedDate,
Description,
LayerArn,
LayerVersionArn,
LicenseInfo,
Version
FROM aws.lambda.layer_version_by_arns
WHERE Arn = '{{ Arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
