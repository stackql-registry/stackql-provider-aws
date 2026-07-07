--- 
title: coverages
hide_title: false
hide_table_of_contents: false
keywords:
  - coverages
  - guardduty
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

Creates, updates, deletes, gets or lists a <code>coverages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="coverages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.coverages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_coverage"
    values={[
        { label: 'list_coverage', value: 'list_coverage' }
    ]}
>
<TabItem value="list_coverage">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="CoverageStatus" /></td>
    <td><code>string</code></td>
    <td>Represents the status of the EKS cluster coverage. (HEALTHY, UNHEALTHY)</td>
</tr>
<tr>
    <td><CopyableCode code="DetectorId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the GuardDuty detector associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Issue" /></td>
    <td><code>string</code></td>
    <td>Represents the reason why a coverage status was UNHEALTHY for the EKS cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceDetails" /></td>
    <td><code>object</code></td>
    <td>Information about the resource for which the coverage statistics are retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the coverage details for the resource were last updated. This is in UTC format.</td>
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
    <td><a href="#list_coverage"><CopyableCode code="list_coverage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists coverage details for your GuardDuty account. If you're a GuardDuty administrator, you can retrieve all resources associated with the active member accounts in your organization. Make sure the accounts have Runtime Monitoring enabled and GuardDuty agent running on their resources.</td>
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
<tr id="parameter-detector_id">
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the detector whose coverage details you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
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
    defaultValue="list_coverage"
    values={[
        { label: 'list_coverage', value: 'list_coverage' }
    ]}
>
<TabItem value="list_coverage">

Lists coverage details for your GuardDuty account. If you're a GuardDuty administrator, you can retrieve all resources associated with the active member accounts in your organization. Make sure the accounts have Runtime Monitoring enabled and GuardDuty agent running on their resources.

```sql
SELECT
AccountId,
CoverageStatus,
DetectorId,
Issue,
ResourceDetails,
ResourceId,
UpdatedAt
FROM aws.guardduty.coverages
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
