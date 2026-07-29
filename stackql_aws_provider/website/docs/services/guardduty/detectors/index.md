--- 
title: detectors
hide_title: false
hide_table_of_contents: false
keywords:
  - detectors
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

Creates, updates, deletes, gets or lists a <code>detectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="detectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.detectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_detector"
    values={[
        { label: 'get_detector', value: 'get_detector' },
        { label: 'list_detectors', value: 'list_detectors' }
    ]}
>
<TabItem value="get_detector">

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
    <td><code>string</code></td>
    <td>The timestamp of when the detector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_sources" /></td>
    <td><code>object</code></td>
    <td>Describes which data sources are enabled for the detector.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>array</code></td>
    <td>Describes the features that have been enabled for the detector.</td>
</tr>
<tr>
    <td><CopyableCode code="finding_publishing_frequency" /></td>
    <td><code>string</code></td>
    <td>The publishing frequency of the finding. (FIFTEEN_MINUTES, ONE_HOUR, SIX_HOURS)</td>
</tr>
<tr>
    <td><CopyableCode code="service_role" /></td>
    <td><code>string</code></td>
    <td>The GuardDuty service role.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The detector status. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags of the detector resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>The last-updated timestamp for the detector.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_detectors">

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
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>A list of detector IDs.</td>
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
    <td><a href="#get_detector"><CopyableCode code="get_detector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a GuardDuty detector specified by the detectorId. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.</td>
</tr>
<tr>
    <td><a href="#list_detectors"><CopyableCode code="list_detectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists detectorIds of all the existing Amazon GuardDuty detector resources.</td>
</tr>
<tr>
    <td><a href="#create_detector"><CopyableCode code="create_detector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Enable"><code>Enable</code></a></td>
    <td></td>
    <td>Creates a single GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region. All data sources are enabled in a new detector by default. When you don't specify any features, with an exception to RUNTIME_MONITORING, all the optional features are enabled by default. When you specify some of the features, any feature that is not specified in the API call gets enabled by default, with an exception to RUNTIME_MONITORING. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.</td>
</tr>
<tr>
    <td><a href="#update_detector"><CopyableCode code="update_detector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the GuardDuty detector specified by the detector ID. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.</td>
</tr>
<tr>
    <td><a href="#delete_detector"><CopyableCode code="delete_detector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon GuardDuty detector that is specified by the detector ID.</td>
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
    <td>The unique ID of the detector that you want to delete. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_detector"
    values={[
        { label: 'get_detector', value: 'get_detector' },
        { label: 'list_detectors', value: 'list_detectors' }
    ]}
>
<TabItem value="get_detector">

Retrieves a GuardDuty detector specified by the detectorId. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.

```sql
SELECT
created_at,
data_sources,
features,
finding_publishing_frequency,
service_role,
status,
tags,
updated_at
FROM aws.guardduty.detectors
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_detectors">

Lists detectorIds of all the existing Amazon GuardDuty detector resources.

```sql
SELECT
detector_id
FROM aws.guardduty.detectors
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_detector"
    values={[
        { label: 'create_detector', value: 'create_detector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_detector">

Creates a single GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region. All data sources are enabled in a new detector by default. When you don't specify any features, with an exception to RUNTIME_MONITORING, all the optional features are enabled by default. When you specify some of the features, any feature that is not specified in the API call gets enabled by default, with an exception to RUNTIME_MONITORING. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.

```sql
INSERT INTO aws.guardduty.detectors (
Enable,
ClientToken,
FindingPublishingFrequency,
DataSources,
Tags,
Features,
region
)
SELECT 
{{ Enable }} /* required */,
'{{ ClientToken }}',
'{{ FindingPublishingFrequency }}',
'{{ DataSources }}',
'{{ Tags }}',
'{{ Features }}',
'{{ region }}'
RETURNING
detector_id,
unprocessed_data_sources
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: detectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the detectors resource.
    - name: Enable
      value: {{ Enable }}
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: FindingPublishingFrequency
      value: "{{ FindingPublishingFrequency }}"
      valid_values: ['FIFTEEN_MINUTES', 'ONE_HOUR', 'SIX_HOURS']
    - name: DataSources
      description: |
        Contains information about which data sources are enabled.
      value:
        S3Logs:
          Enable: {{ Enable }}
        Kubernetes:
          AuditLogs:
            Enable: {{ Enable }}
        MalwareProtection:
          ScanEc2InstanceWithFindings:
            EbsVolumes: {{ EbsVolumes }}
    - name: Tags
      value: "{{ Tags }}"
    - name: Features
      value:
        - Name: "{{ Name }}"
          Status: "{{ Status }}"
          AdditionalConfiguration: "{{ AdditionalConfiguration }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_detector"
    values={[
        { label: 'update_detector', value: 'update_detector' }
    ]}
>
<TabItem value="update_detector">

Updates the GuardDuty detector specified by the detector ID. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.

```sql
UPDATE aws.guardduty.detectors
SET 
Enable = {{ Enable }},
FindingPublishingFrequency = '{{ FindingPublishingFrequency }}',
DataSources = '{{ DataSources }}',
Features = '{{ Features }}'
WHERE 
detector_id = '{{ detector_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_detector"
    values={[
        { label: 'delete_detector', value: 'delete_detector' }
    ]}
>
<TabItem value="delete_detector">

Deletes an Amazon GuardDuty detector that is specified by the detector ID.

```sql
DELETE FROM aws.guardduty.detectors
WHERE detector_id = '{{ detector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
