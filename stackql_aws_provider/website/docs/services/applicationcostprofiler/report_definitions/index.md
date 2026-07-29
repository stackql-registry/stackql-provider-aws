--- 
title: report_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - report_definitions
  - applicationcostprofiler
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

Creates, updates, deletes, gets or lists a <code>report_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.applicationcostprofiler.report_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_report_definition"
    values={[
        { label: 'get_report_definition', value: 'get_report_definition' },
        { label: 'list_report_definitions', value: 'list_report_definitions' }
    ]}
>
<TabItem value="get_report_definition">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp (milliseconds) when this report definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_s3_location" /></td>
    <td><code>object</code></td>
    <td>Amazon Simple Storage Service (Amazon S3) location where the report is uploaded.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>Format of the generated report. (CSV, PARQUET)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp (milliseconds) when this report definition was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="report_description" /></td>
    <td><code>string</code></td>
    <td>Description of the report. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="report_frequency" /></td>
    <td><code>string</code></td>
    <td>Cadence used to generate the report. (MONTHLY, DAILY, ALL)</td>
</tr>
<tr>
    <td><CopyableCode code="report_id" /></td>
    <td><code>string</code></td>
    <td>ID of the report retrieved. (pattern: &lt;code&gt;^&#91;0-9A-Za-z\.\-_&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_report_definitions">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp (milliseconds) when this report definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_s3_location" /></td>
    <td><code>object</code></td>
    <td>Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>The format used for the generated reports. (CSV, PARQUET)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp (milliseconds) when this report definition was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="report_description" /></td>
    <td><code>string</code></td>
    <td>Description of the report (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="report_frequency" /></td>
    <td><code>string</code></td>
    <td>The cadence at which the report is generated. (MONTHLY, DAILY, ALL)</td>
</tr>
<tr>
    <td><CopyableCode code="report_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the report. (pattern: &lt;code&gt;^&#91;0-9A-Za-z\.\-_&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_report_definition"><CopyableCode code="get_report_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-report_id"><code>report_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the definition of a report already configured in AWS Application Cost Profiler.</td>
</tr>
<tr>
    <td><a href="#list_report_definitions"><CopyableCode code="list_report_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of all reports and their configurations for your AWS account. The maximum number of reports is one.</td>
</tr>
<tr>
    <td><a href="#update_report_definition"><CopyableCode code="update_report_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-report_id"><code>report_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-reportDescription"><code>reportDescription</code></a>, <a href="#parameter-reportFrequency"><code>reportFrequency</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-destinationS3Location"><code>destinationS3Location</code></a></td>
    <td></td>
    <td>Updates existing report in AWS Application Cost Profiler.</td>
</tr>
<tr>
    <td><a href="#put_report_definition"><CopyableCode code="put_report_definition" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-reportId"><code>reportId</code></a>, <a href="#parameter-reportDescription"><code>reportDescription</code></a>, <a href="#parameter-reportFrequency"><code>reportFrequency</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-destinationS3Location"><code>destinationS3Location</code></a></td>
    <td></td>
    <td>Creates the report definition for a report in Application Cost Profiler.</td>
</tr>
<tr>
    <td><a href="#delete_report_definition"><CopyableCode code="delete_report_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-report_id"><code>report_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.</td>
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
<tr id="parameter-report_id">
    <td><CopyableCode code="report_id" /></td>
    <td><code>string</code></td>
    <td>Required. ID of the report to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value from a previous call to access the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_report_definition"
    values={[
        { label: 'get_report_definition', value: 'get_report_definition' },
        { label: 'list_report_definitions', value: 'list_report_definitions' }
    ]}
>
<TabItem value="get_report_definition">

Retrieves the definition of a report already configured in AWS Application Cost Profiler.

```sql
SELECT
created_at,
destination_s3_location,
format_,
last_updated,
report_description,
report_frequency,
report_id
FROM aws.applicationcostprofiler.report_definitions
WHERE report_id = '{{ report_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_report_definitions">

Retrieves a list of all reports and their configurations for your AWS account. The maximum number of reports is one.

```sql
SELECT
created_at,
destination_s3_location,
format_,
last_updated_at,
report_description,
report_frequency,
report_id
FROM aws.applicationcostprofiler.report_definitions
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_report_definition"
    values={[
        { label: 'update_report_definition', value: 'update_report_definition' }
    ]}
>
<TabItem value="update_report_definition">

Updates existing report in AWS Application Cost Profiler.

```sql
UPDATE aws.applicationcostprofiler.report_definitions
SET 
reportDescription = '{{ reportDescription }}',
reportFrequency = '{{ reportFrequency }}',
format = '{{ format }}',
destinationS3Location = '{{ destinationS3Location }}'
WHERE 
report_id = '{{ report_id }}' --required
AND region = '{{ region }}' --required
AND reportDescription = '{{ reportDescription }}' --required
AND reportFrequency = '{{ reportFrequency }}' --required
AND format = '{{ format }}' --required
AND destinationS3Location = '{{ destinationS3Location }}' --required
RETURNING
report_id;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_report_definition"
    values={[
        { label: 'put_report_definition', value: 'put_report_definition' }
    ]}
>
<TabItem value="put_report_definition">

Creates the report definition for a report in Application Cost Profiler.

```sql
REPLACE aws.applicationcostprofiler.report_definitions
SET 
reportId = '{{ reportId }}',
reportDescription = '{{ reportDescription }}',
reportFrequency = '{{ reportFrequency }}',
format = '{{ format }}',
destinationS3Location = '{{ destinationS3Location }}'
WHERE 
region = '{{ region }}' --required
AND reportId = '{{ reportId }}' --required
AND reportDescription = '{{ reportDescription }}' --required
AND reportFrequency = '{{ reportFrequency }}' --required
AND format = '{{ format }}' --required
AND destinationS3Location = '{{ destinationS3Location }}' --required
RETURNING
report_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_report_definition"
    values={[
        { label: 'delete_report_definition', value: 'delete_report_definition' }
    ]}
>
<TabItem value="delete_report_definition">

Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.

```sql
DELETE FROM aws.applicationcostprofiler.report_definitions
WHERE report_id = '{{ report_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
