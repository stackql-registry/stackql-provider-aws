--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
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

Creates, updates, deletes, gets or lists a <code>findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_findings"
    values={[
        { label: 'get_findings', value: 'get_findings' },
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="get_findings">

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
    <td><CopyableCode code="Findings" /></td>
    <td><code>array</code></td>
    <td>A list of findings.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_findings">

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
    <td><CopyableCode code="finding_id" /></td>
    <td><code>string</code></td>
    <td>The IDs of the findings that you're listing.</td>
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
    <td><a href="#get_findings"><CopyableCode code="get_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes Amazon GuardDuty findings specified by finding IDs.</td>
</tr>
<tr>
    <td><a href="#list_findings"><CopyableCode code="list_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists GuardDuty findings for the specified detector ID. There might be regional differences because some flags might not be available in all the Regions where GuardDuty is currently supported. For more information, see Regions and endpoints.</td>
</tr>
<tr>
    <td><a href="#create_sample_findings"><CopyableCode code="create_sample_findings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates sample findings of types specified by the list of finding types. If 'NULL' is specified for findingTypes, the API generates sample findings of all supported finding types.</td>
</tr>
<tr>
    <td><a href="#update_findings_feedback"><CopyableCode code="update_findings_feedback" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FindingIds"><code>FindingIds</code></a>, <a href="#parameter-Feedback"><code>Feedback</code></a></td>
    <td></td>
    <td>Marks the specified GuardDuty findings as useful or not useful.</td>
</tr>
<tr>
    <td><a href="#archive_findings"><CopyableCode code="archive_findings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FindingIds"><code>FindingIds</code></a></td>
    <td></td>
    <td>Archives GuardDuty findings that are specified by the list of finding IDs. Only the administrator account can archive findings. Member accounts don't have permission to archive findings from their accounts.</td>
</tr>
<tr>
    <td><a href="#unarchive_findings"><CopyableCode code="unarchive_findings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FindingIds"><code>FindingIds</code></a></td>
    <td></td>
    <td>Unarchives GuardDuty findings specified by the findingIds.</td>
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
    <td>The ID of the detector associated with the findings to unarchive. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
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
    defaultValue="get_findings"
    values={[
        { label: 'get_findings', value: 'get_findings' },
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="get_findings">

Describes Amazon GuardDuty findings specified by finding IDs.

```sql
SELECT
Findings
FROM aws.guardduty.findings
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_findings">

Lists GuardDuty findings for the specified detector ID. There might be regional differences because some flags might not be available in all the Regions where GuardDuty is currently supported. For more information, see Regions and endpoints.

```sql
SELECT
finding_id
FROM aws.guardduty.findings
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sample_findings"
    values={[
        { label: 'create_sample_findings', value: 'create_sample_findings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sample_findings">

Generates sample findings of types specified by the list of finding types. If 'NULL' is specified for findingTypes, the API generates sample findings of all supported finding types.

```sql
INSERT INTO aws.guardduty.findings (
FindingTypes,
detector_id,
region
)
SELECT 
'{{ FindingTypes }}',
'{{ detector_id }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: findings
  props:
    - name: detector_id
      value: "{{ detector_id }}"
      description: Required parameter for the findings resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the findings resource.
    - name: FindingTypes
      value:
        - "{{ FindingTypes }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_findings_feedback"
    values={[
        { label: 'update_findings_feedback', value: 'update_findings_feedback' }
    ]}
>
<TabItem value="update_findings_feedback">

Marks the specified GuardDuty findings as useful or not useful.

```sql
UPDATE aws.guardduty.findings
SET 
FindingIds = '{{ FindingIds }}',
Feedback = '{{ Feedback }}',
Comments = '{{ Comments }}'
WHERE 
detector_id = '{{ detector_id }}' --required
AND region = '{{ region }}' --required
AND FindingIds = '{{ FindingIds }}' --required
AND Feedback = '{{ Feedback }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="archive_findings"
    values={[
        { label: 'archive_findings', value: 'archive_findings' },
        { label: 'unarchive_findings', value: 'unarchive_findings' }
    ]}
>
<TabItem value="archive_findings">

Archives GuardDuty findings that are specified by the list of finding IDs. Only the administrator account can archive findings. Member accounts don't have permission to archive findings from their accounts.

```sql
EXEC aws.guardduty.findings.archive_findings 
@detector_id='{{ detector_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"FindingIds": "{{ FindingIds }}"
}'
;
```
</TabItem>
<TabItem value="unarchive_findings">

Unarchives GuardDuty findings specified by the findingIds.

```sql
EXEC aws.guardduty.findings.unarchive_findings 
@detector_id='{{ detector_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"FindingIds": "{{ FindingIds }}"
}'
;
```
</TabItem>
</Tabs>
