--- 
title: storage_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_configurations
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>storage_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.storage_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_storage_configuration"
    values={[
        { label: 'describe_storage_configuration', value: 'describe_storage_configuration' }
    ]}
>
<TabItem value="describe_storage_configuration">

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
    <td><CopyableCode code="configurationStatus" /></td>
    <td><code>object</code></td>
    <td>Contains current status information for the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="disallowIngestNullNaN" /></td>
    <td><code>boolean</code></td>
    <td>Describes the configuration for ingesting NULL and NaN data. By default the feature is allowed. The feature is disallowed if the value is true.</td>
</tr>
<tr>
    <td><CopyableCode code="disassociatedDataStorage" /></td>
    <td><code>string</code></td>
    <td>Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The disassociatedDataStorage can be one of the following values: ENABLED – IoT SiteWise accepts time series that aren't associated with asset properties. After the disassociatedDataStorage is enabled, you can't disable it. DISABLED – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties. For more information, see Data streams in the IoT SiteWise User Guide. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the storage configuration was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="multiLayerStorage" /></td>
    <td><code>object</code></td>
    <td>Contains information about the storage destination.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPeriod" /></td>
    <td><code>object</code></td>
    <td>The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</td>
</tr>
<tr>
    <td><CopyableCode code="storageType" /></td>
    <td><code>string</code></td>
    <td>The storage tier that you specified for your data. The storageType parameter can be one of the following values: SITEWISE_DEFAULT_STORAGE – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database. MULTI_LAYER_STORAGE – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket. (SITEWISE_DEFAULT_STORAGE, MULTI_LAYER_STORAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="warmTier" /></td>
    <td><code>string</code></td>
    <td>A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="warmTierRetentionPeriod" /></td>
    <td><code>object</code></td>
    <td>Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.</td>
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
    <td><a href="#describe_storage_configuration"><CopyableCode code="describe_storage_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the storage configuration for IoT SiteWise.</td>
</tr>
<tr>
    <td><a href="#put_storage_configuration"><CopyableCode code="put_storage_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-storageType"><code>storageType</code></a></td>
    <td></td>
    <td>Configures storage settings for IoT SiteWise.</td>
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
    defaultValue="describe_storage_configuration"
    values={[
        { label: 'describe_storage_configuration', value: 'describe_storage_configuration' }
    ]}
>
<TabItem value="describe_storage_configuration">

Retrieves information about the storage configuration for IoT SiteWise.

```sql
SELECT
configurationStatus,
disallowIngestNullNaN,
disassociatedDataStorage,
lastUpdateDate,
multiLayerStorage,
retentionPeriod,
storageType,
warmTier,
warmTierRetentionPeriod
FROM aws.iotsitewise.storage_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_storage_configuration"
    values={[
        { label: 'put_storage_configuration', value: 'put_storage_configuration' }
    ]}
>
<TabItem value="put_storage_configuration">

Configures storage settings for IoT SiteWise.

```sql
REPLACE aws.iotsitewise.storage_configurations
SET 
storageType = '{{ storageType }}',
multiLayerStorage = '{{ multiLayerStorage }}',
disassociatedDataStorage = '{{ disassociatedDataStorage }}',
retentionPeriod = '{{ retentionPeriod }}',
warmTier = '{{ warmTier }}',
warmTierRetentionPeriod = '{{ warmTierRetentionPeriod }}',
disallowIngestNullNaN = {{ disallowIngestNullNaN }}
WHERE 
region = '{{ region }}' --required
AND storageType = '{{ storageType }}' --required
RETURNING
configurationStatus,
disallowIngestNullNaN,
disassociatedDataStorage,
multiLayerStorage,
retentionPeriod,
storageType,
warmTier,
warmTierRetentionPeriod;
```
</TabItem>
</Tabs>
