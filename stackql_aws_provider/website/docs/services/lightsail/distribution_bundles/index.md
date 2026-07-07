--- 
title: distribution_bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - distribution_bundles
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>distribution_bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="distribution_bundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.distribution_bundles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_distribution_bundles"
    values={[
        { label: 'get_distribution_bundles', value: 'get_distribution_bundles' }
    ]}
>
<TabItem value="get_distribution_bundles">

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
    <td><CopyableCode code="bundles" /></td>
    <td><code>array</code></td>
    <td>An object that describes a distribution bundle.</td>
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
    <td><a href="#get_distribution_bundles"><CopyableCode code="get_distribution_bundles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the bundles that can be applied to your Amazon Lightsail content delivery network (CDN) distributions. A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</td>
</tr>
<tr>
    <td><a href="#update_distribution_bundle"><CopyableCode code="update_distribution_bundle" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the bundle of your Amazon Lightsail content delivery network (CDN) distribution. A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution. Update your distribution's bundle if your distribution is going over its monthly network transfer quota and is incurring an overage fee. You can update your distribution's bundle only one time within your monthly Amazon Web Services billing cycle. To determine if you can update your distribution's bundle, use the GetDistributions action. The ableToUpdateBundle parameter in the result will indicate whether you can currently update your distribution's bundle.</td>
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
    defaultValue="get_distribution_bundles"
    values={[
        { label: 'get_distribution_bundles', value: 'get_distribution_bundles' }
    ]}
>
<TabItem value="get_distribution_bundles">

Returns the bundles that can be applied to your Amazon Lightsail content delivery network (CDN) distributions. A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.

```sql
SELECT
bundles
FROM aws.lightsail.distribution_bundles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_distribution_bundle"
    values={[
        { label: 'update_distribution_bundle', value: 'update_distribution_bundle' }
    ]}
>
<TabItem value="update_distribution_bundle">

Updates the bundle of your Amazon Lightsail content delivery network (CDN) distribution. A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution. Update your distribution's bundle if your distribution is going over its monthly network transfer quota and is incurring an overage fee. You can update your distribution's bundle only one time within your monthly Amazon Web Services billing cycle. To determine if you can update your distribution's bundle, use the GetDistributions action. The ableToUpdateBundle parameter in the result will indicate whether you can currently update your distribution's bundle.

```sql
UPDATE aws.lightsail.distribution_bundles
SET 
distributionName = '{{ distributionName }}',
bundleId = '{{ bundleId }}'
WHERE 
region = '{{ region }}' --required
RETURNING
operation;
```
</TabItem>
</Tabs>
