--- 
title: scraper_logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - scraper_logging_configurations
  - amp
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

Creates, updates, deletes, gets or lists a <code>scraper_logging_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scraper_logging_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amp.scraper_logging_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scraper_logging_configuration"
    values={[
        { label: 'describe_scraper_logging_configuration', value: 'describe_scraper_logging_configuration' }
    ]}
>
<TabItem value="describe_scraper_logging_configuration">

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
    <td><CopyableCode code="loggingDestination" /></td>
    <td><code>object</code></td>
    <td>The destination where scraper logs are sent.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the logging configuration was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="scraperComponents" /></td>
    <td><code>array</code></td>
    <td>The list of scraper components configured for logging.</td>
</tr>
<tr>
    <td><CopyableCode code="scraperId" /></td>
    <td><code>string</code></td>
    <td>A scraper ID. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the scraper logging configuration.</td>
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
    <td><a href="#describe_scraper_logging_configuration"><CopyableCode code="describe_scraper_logging_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scraper_id"><code>scraper_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the logging configuration for a Amazon Managed Service for Prometheus scraper.</td>
</tr>
<tr>
    <td><a href="#update_scraper_logging_configuration"><CopyableCode code="update_scraper_logging_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-scraper_id"><code>scraper_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loggingDestination"><code>loggingDestination</code></a></td>
    <td></td>
    <td>Updates the logging configuration for a Amazon Managed Service for Prometheus scraper.</td>
</tr>
<tr>
    <td><a href="#delete_scraper_logging_configuration"><CopyableCode code="delete_scraper_logging_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-scraper_id"><code>scraper_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the logging configuration for a Amazon Managed Service for Prometheus scraper.</td>
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
<tr id="parameter-scraper_id">
    <td><CopyableCode code="scraper_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the scraper whose logging configuration will be deleted.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the request is processed exactly once.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_scraper_logging_configuration"
    values={[
        { label: 'describe_scraper_logging_configuration', value: 'describe_scraper_logging_configuration' }
    ]}
>
<TabItem value="describe_scraper_logging_configuration">

Describes the logging configuration for a Amazon Managed Service for Prometheus scraper.

```sql
SELECT
loggingDestination,
modifiedAt,
scraperComponents,
scraperId,
status
FROM aws.amp.scraper_logging_configurations
WHERE scraper_id = '{{ scraper_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scraper_logging_configuration"
    values={[
        { label: 'update_scraper_logging_configuration', value: 'update_scraper_logging_configuration' }
    ]}
>
<TabItem value="update_scraper_logging_configuration">

Updates the logging configuration for a Amazon Managed Service for Prometheus scraper.

```sql
UPDATE aws.amp.scraper_logging_configurations
SET 
loggingDestination = '{{ loggingDestination }}',
scraperComponents = '{{ scraperComponents }}'
WHERE 
scraper_id = '{{ scraper_id }}' --required
AND region = '{{ region }}' --required
AND loggingDestination = '{{ loggingDestination }}' --required
RETURNING
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scraper_logging_configuration"
    values={[
        { label: 'delete_scraper_logging_configuration', value: 'delete_scraper_logging_configuration' }
    ]}
>
<TabItem value="delete_scraper_logging_configuration">

Deletes the logging configuration for a Amazon Managed Service for Prometheus scraper.

```sql
DELETE FROM aws.amp.scraper_logging_configurations
WHERE scraper_id = '{{ scraper_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
