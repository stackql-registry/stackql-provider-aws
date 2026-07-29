--- 
title: member_detectors
hide_title: false
hide_table_of_contents: false
keywords:
  - member_detectors
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

Creates, updates, deletes, gets or lists a <code>member_detectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="member_detectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.member_detectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_member_detectors"
    values={[
        { label: 'get_member_detectors', value: 'get_member_detectors' }
    ]}
>
<TabItem value="get_member_detectors">

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
    <td><CopyableCode code="member_data_source_configurations" /></td>
    <td><code>array</code></td>
    <td>An object that describes which data sources are enabled for a member account.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_accounts" /></td>
    <td><code>array</code></td>
    <td>A list of member account IDs that were unable to be processed along with an explanation for why they were not processed.</td>
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
    <td><a href="#get_member_detectors"><CopyableCode code="get_member_detectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes which data sources are enabled for the member account's detector. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.</td>
</tr>
<tr>
    <td><a href="#update_member_detectors"><CopyableCode code="update_member_detectors" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountIds"><code>AccountIds</code></a></td>
    <td></td>
    <td>Contains information on member accounts to be updated. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.</td>
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
    <td>The detector ID of the administrator account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
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
    defaultValue="get_member_detectors"
    values={[
        { label: 'get_member_detectors', value: 'get_member_detectors' }
    ]}
>
<TabItem value="get_member_detectors">

Describes which data sources are enabled for the member account's detector. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.

```sql
SELECT
member_data_source_configurations,
unprocessed_accounts
FROM aws.guardduty.member_detectors
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_member_detectors"
    values={[
        { label: 'update_member_detectors', value: 'update_member_detectors' }
    ]}
>
<TabItem value="update_member_detectors">

Contains information on member accounts to be updated. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.

```sql
UPDATE aws.guardduty.member_detectors
SET 
AccountIds = '{{ AccountIds }}',
DataSources = '{{ DataSources }}',
Features = '{{ Features }}'
WHERE 
detector_id = '{{ detector_id }}' --required
AND region = '{{ region }}' --required
AND AccountIds = '{{ AccountIds }}' --required
RETURNING
unprocessed_accounts;
```
</TabItem>
</Tabs>
