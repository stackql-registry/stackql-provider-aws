--- 
title: ota_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - ota_updates
  - iot
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

Creates, updates, deletes, gets or lists an <code>ota_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ota_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.ota_updates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ota_update"
    values={[
        { label: 'get_ota_update', value: 'get_ota_update' },
        { label: 'list_ota_updates', value: 'list_ota_updates' }
    ]}
>
<TabItem value="get_ota_update">

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
    <td><CopyableCode code="additional_parameters" /></td>
    <td><code>object</code></td>
    <td>A collection of name/value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="aws_iot_job_arn" /></td>
    <td><code>string</code></td>
    <td>The IoT job ARN associated with the OTA update.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_iot_job_id" /></td>
    <td><code>string</code></td>
    <td>The IoT job ID associated with the OTA update.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_job_executions_rollout_config" /></td>
    <td><code>object</code></td>
    <td>Configuration for the rollout of OTA updates.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_job_presigned_url_config" /></td>
    <td><code>object</code></td>
    <td>Configuration information for pre-signed URLs. Valid when protocols contains HTTP.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the OTA update was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the OTA update. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>object</code></td>
    <td>Error information associated with the OTA update.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the OTA update was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="ota_update_arn" /></td>
    <td><code>string</code></td>
    <td>The OTA update ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="ota_update_files" /></td>
    <td><code>array</code></td>
    <td>A list of files associated with the OTA update.</td>
</tr>
<tr>
    <td><CopyableCode code="ota_update_id" /></td>
    <td><code>string</code></td>
    <td>The OTA update ID. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ota_update_status" /></td>
    <td><code>string</code></td>
    <td>The status of the OTA update. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="protocols" /></td>
    <td><code>array</code></td>
    <td>The protocol used to transfer the OTA update image. Valid values are &#91;HTTP&#93;, &#91;MQTT&#93;, &#91;HTTP, MQTT&#93;. When both HTTP and MQTT are specified, the target device can choose the protocol.</td>
</tr>
<tr>
    <td><CopyableCode code="target_selection" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when the thing is added to a target group, even after the OTA update was completed by all things originally in the group. (CONTINUOUS, SNAPSHOT)</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>The targets of the OTA update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ota_updates">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the OTA update was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ota_update_arn" /></td>
    <td><code>string</code></td>
    <td>The OTA update ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="ota_update_id" /></td>
    <td><code>string</code></td>
    <td>The OTA update ID. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_ota_update"><CopyableCode code="get_ota_update" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ota_update_id"><code>ota_update_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an OTA update. Requires permission to access the GetOTAUpdate action.</td>
</tr>
<tr>
    <td><a href="#list_ota_updates"><CopyableCode code="list_ota_updates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-otaUpdateStatus"><code>otaUpdateStatus</code></a></td>
    <td>Lists OTA updates. Requires permission to access the ListOTAUpdates action.</td>
</tr>
<tr>
    <td><a href="#create_ota_update"><CopyableCode code="create_ota_update" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ota_update_id"><code>ota_update_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targets"><code>targets</code></a>, <a href="#parameter-files"><code>files</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates an IoT OTA update on a target group of things or groups. Requires permission to access the CreateOTAUpdate action.</td>
</tr>
<tr>
    <td><a href="#delete_ota_update"><CopyableCode code="delete_ota_update" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ota_update_id"><code>ota_update_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-deleteStream"><code>deleteStream</code></a>, <a href="#parameter-forceDeleteAWSJob"><code>forceDeleteAWSJob</code></a></td>
    <td>Delete an OTA update. Requires permission to access the DeleteOTAUpdate action.</td>
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
<tr id="parameter-ota_update_id">
    <td><CopyableCode code="ota_update_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the OTA update to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-deleteStream">
    <td><CopyableCode code="deleteStream" /></td>
    <td><code>boolean</code></td>
    <td>When true, the stream created by the OTAUpdate process is deleted when the OTA update is deleted. Ignored if the stream specified in the OTAUpdate is supplied by the user.</td>
</tr>
<tr id="parameter-forceDeleteAWSJob">
    <td><CopyableCode code="forceDeleteAWSJob" /></td>
    <td><code>boolean</code></td>
    <td>When true, deletes the IoT job created by the OTAUpdate process even if it is "IN_PROGRESS". Otherwise, if the job is not in a terminal state ("COMPLETED" or "CANCELED") an exception will occur. The default is false.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to retrieve the next set of results.</td>
</tr>
<tr id="parameter-otaUpdateStatus">
    <td><CopyableCode code="otaUpdateStatus" /></td>
    <td><code>string</code></td>
    <td>The OTA update job status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ota_update"
    values={[
        { label: 'get_ota_update', value: 'get_ota_update' },
        { label: 'list_ota_updates', value: 'list_ota_updates' }
    ]}
>
<TabItem value="get_ota_update">

Gets an OTA update. Requires permission to access the GetOTAUpdate action.

```sql
SELECT
additional_parameters,
aws_iot_job_arn,
aws_iot_job_id,
aws_job_executions_rollout_config,
aws_job_presigned_url_config,
creation_date,
description,
error_info,
last_modified_date,
ota_update_arn,
ota_update_files,
ota_update_id,
ota_update_status,
protocols,
target_selection,
targets
FROM aws.iot.ota_updates
WHERE ota_update_id = '{{ ota_update_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ota_updates">

Lists OTA updates. Requires permission to access the ListOTAUpdates action.

```sql
SELECT
creation_date,
ota_update_arn,
ota_update_id
FROM aws.iot.ota_updates
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND otaUpdateStatus = '{{ otaUpdateStatus }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ota_update"
    values={[
        { label: 'create_ota_update', value: 'create_ota_update' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ota_update">

Creates an IoT OTA update on a target group of things or groups. Requires permission to access the CreateOTAUpdate action.

```sql
INSERT INTO aws.iot.ota_updates (
description,
targets,
protocols,
targetSelection,
awsJobExecutionsRolloutConfig,
awsJobPresignedUrlConfig,
awsJobAbortConfig,
awsJobTimeoutConfig,
files,
roleArn,
additionalParameters,
tags,
ota_update_id,
region
)
SELECT 
'{{ description }}',
'{{ targets }}' /* required */,
'{{ protocols }}',
'{{ targetSelection }}',
'{{ awsJobExecutionsRolloutConfig }}',
'{{ awsJobPresignedUrlConfig }}',
'{{ awsJobAbortConfig }}',
'{{ awsJobTimeoutConfig }}',
'{{ files }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ additionalParameters }}',
'{{ tags }}',
'{{ ota_update_id }}',
'{{ region }}'
RETURNING
aws_iot_job_arn,
aws_iot_job_id,
ota_update_arn,
ota_update_id,
ota_update_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ota_updates
  props:
    - name: ota_update_id
      value: "{{ ota_update_id }}"
      description: Required parameter for the ota_updates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ota_updates resource.
    - name: description
      value: "{{ description }}"
    - name: targets
      value:
        - "{{ targets }}"
    - name: protocols
      value:
        - "{{ protocols }}"
    - name: targetSelection
      value: "{{ targetSelection }}"
      valid_values: ['CONTINUOUS', 'SNAPSHOT']
    - name: awsJobExecutionsRolloutConfig
      description: |
        Configuration for the rollout of OTA updates.
      value:
        maximumPerMinute: {{ maximumPerMinute }}
        exponentialRate:
          baseRatePerMinute: {{ baseRatePerMinute }}
          incrementFactor: {{ incrementFactor }}
          rateIncreaseCriteria:
            numberOfNotifiedThings: {{ numberOfNotifiedThings }}
            numberOfSucceededThings: {{ numberOfSucceededThings }}
    - name: awsJobPresignedUrlConfig
      description: |
        Configuration information for pre-signed URLs. Valid when protocols contains HTTP.
      value:
        expiresInSec: {{ expiresInSec }}
    - name: awsJobAbortConfig
      description: |
        The criteria that determine when and how a job abort takes place.
      value:
        abortCriteriaList:
          - failureType: "{{ failureType }}"
            action: "{{ action }}"
            thresholdPercentage: {{ thresholdPercentage }}
            minNumberOfExecutedThings: {{ minNumberOfExecutedThings }}
    - name: awsJobTimeoutConfig
      description: |
        Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to IN_PROGRESS. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to TIMED_OUT.
      value:
        inProgressTimeoutInMinutes: {{ inProgressTimeoutInMinutes }}
    - name: files
      value:
        - fileName: "{{ fileName }}"
          fileType: {{ fileType }}
          fileVersion: "{{ fileVersion }}"
          fileLocation:
            stream:
              streamId: "{{ streamId }}"
              fileId: {{ fileId }}
            s3Location:
              bucket: "{{ bucket }}"
              key: "{{ key }}"
              version: "{{ version }}"
          codeSigning:
            awsSignerJobId: "{{ awsSignerJobId }}"
            startSigningJobParameter:
              signingProfileParameter:
                certificateArn: "{{ certificateArn }}"
                platform: "{{ platform }}"
                certificatePathOnDevice: "{{ certificatePathOnDevice }}"
              signingProfileName: "{{ signingProfileName }}"
              destination:
                s3Destination:
                  bucket: "{{ bucket }}"
                  prefix: "{{ prefix }}"
            customCodeSigning:
              signature:
                inlineDocument: "{{ inlineDocument }}"
              certificateChain:
                certificateName: "{{ certificateName }}"
                inlineDocument: "{{ inlineDocument }}"
              hashAlgorithm: "{{ hashAlgorithm }}"
              signatureAlgorithm: "{{ signatureAlgorithm }}"
          attributes: "{{ attributes }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: additionalParameters
      value: "{{ additionalParameters }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ota_update"
    values={[
        { label: 'delete_ota_update', value: 'delete_ota_update' }
    ]}
>
<TabItem value="delete_ota_update">

Delete an OTA update. Requires permission to access the DeleteOTAUpdate action.

```sql
DELETE FROM aws.iot.ota_updates
WHERE ota_update_id = '{{ ota_update_id }}' --required
AND region = '{{ region }}' --required
AND deleteStream = '{{ deleteStream }}'
AND forceDeleteAWSJob = '{{ forceDeleteAWSJob }}'
;
```
</TabItem>
</Tabs>
