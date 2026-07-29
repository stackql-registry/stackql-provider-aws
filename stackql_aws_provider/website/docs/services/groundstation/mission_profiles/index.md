--- 
title: mission_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - mission_profiles
  - groundstation
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

Creates, updates, deletes, gets or lists a <code>mission_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mission_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.mission_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_mission_profile"
    values={[
        { label: 'get_mission_profile', value: 'get_mission_profile' },
        { label: 'list_mission_profiles', value: 'list_mission_profiles' }
    ]}
>
<TabItem value="get_mission_profile">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of a mission profile. (pattern: &lt;code&gt;&#91; a-zA-Z0-9_:-&#93;&#123;1,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_post_pass_duration_seconds" /></td>
    <td><code>integer</code></td>
    <td>Amount of time after a contact ends that you'd like to receive a CloudWatch event indicating the pass has finished.</td>
</tr>
<tr>
    <td><CopyableCode code="contact_pre_pass_duration_seconds" /></td>
    <td><code>integer</code></td>
    <td>Amount of time prior to contact start you'd like to receive a CloudWatch event indicating an upcoming pass.</td>
</tr>
<tr>
    <td><CopyableCode code="dataflow_edges" /></td>
    <td><code>array</code></td>
    <td>A list of lists of ARNs. Each list of ARNs is an edge, with a from Config and a to Config.</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_viable_contact_duration_seconds" /></td>
    <td><code>integer</code></td>
    <td>Smallest amount of time in seconds that you'd like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</td>
</tr>
<tr>
    <td><CopyableCode code="mission_profile_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of a mission profile. (pattern: &lt;code&gt;arn:aws:groundstation:&#91;-a-z0-9&#93;&#123;1,50&#125;:&#91;0-9&#93;&#123;12&#125;:mission-profile/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mission_profile_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a mission profile. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region of a mission profile. (pattern: &lt;code&gt;&#91;\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="streams_kms_key" /></td>
    <td><code>object</code></td>
    <td>KMS key info.</td>
</tr>
<tr>
    <td><CopyableCode code="streams_kms_role" /></td>
    <td><code>string</code></td>
    <td>Role to use for encrypting streams with KMS key. (pattern: &lt;code&gt;arn:&#91;a-z0-9-.&#93;&#123;1,63&#125;:iam::&#91;0-9&#93;&#123;12&#125;:role/&#91;\w+=,.@-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to a mission profile.</td>
</tr>
<tr>
    <td><CopyableCode code="telemetry_sink_config_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of a telemetry sink Config. (pattern: &lt;code&gt;arn:aws:groundstation:&#91;-a-z0-9&#93;&#123;1,50&#125;:&#91;0-9&#93;&#123;12&#125;:config/&#91;a-z0-9&#93;+(-&#91;a-z0-9&#93;+)&#123;0,4&#125;/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(/.&#123;1,256&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_config_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of a tracking Config. (pattern: &lt;code&gt;arn:aws:groundstation:&#91;-a-z0-9&#93;&#123;1,50&#125;:&#91;0-9&#93;&#123;12&#125;:config/&#91;a-z0-9&#93;+(-&#91;a-z0-9&#93;+)&#123;0,4&#125;/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(/.&#123;1,256&#125;)?&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_mission_profiles">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of a mission profile. (pattern: &lt;code&gt;&#91; a-zA-Z0-9_:-&#93;&#123;1,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mission_profile_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of a mission profile. (pattern: &lt;code&gt;arn:aws:groundstation:&#91;-a-z0-9&#93;&#123;1,50&#125;:&#91;0-9&#93;&#123;12&#125;:mission-profile/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mission_profile_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a mission profile. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region of a mission profile. (pattern: &lt;code&gt;&#91;\w-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_mission_profile"><CopyableCode code="get_mission_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mission_profile_id"><code>mission_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a mission profile.</td>
</tr>
<tr>
    <td><a href="#list_mission_profiles"><CopyableCode code="list_mission_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of mission profiles.</td>
</tr>
<tr>
    <td><a href="#create_mission_profile"><CopyableCode code="create_mission_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-minimumViableContactDurationSeconds"><code>minimumViableContactDurationSeconds</code></a>, <a href="#parameter-dataflowEdges"><code>dataflowEdges</code></a>, <a href="#parameter-trackingConfigArn"><code>trackingConfigArn</code></a></td>
    <td></td>
    <td>Creates a mission profile. dataflowEdges is a list of lists of strings. Each lower level list of strings has two elements: a from ARN and a to ARN.</td>
</tr>
<tr>
    <td><a href="#update_mission_profile"><CopyableCode code="update_mission_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-mission_profile_id"><code>mission_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a mission profile. Updating a mission profile will not update the execution parameters for existing future contacts.</td>
</tr>
<tr>
    <td><a href="#delete_mission_profile"><CopyableCode code="delete_mission_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-mission_profile_id"><code>mission_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a mission profile.</td>
</tr>
<tr>
    <td><a href="#reserve_contact"><CopyableCode code="reserve_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-missionProfileArn"><code>missionProfileArn</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-groundStation"><code>groundStation</code></a></td>
    <td></td>
    <td>Reserves a contact using specified parameters.</td>
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
<tr id="parameter-mission_profile_id">
    <td><CopyableCode code="mission_profile_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a mission profile.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of mission profiles returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next token returned in the request of a previous ListMissionProfiles call. Used to get the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_mission_profile"
    values={[
        { label: 'get_mission_profile', value: 'get_mission_profile' },
        { label: 'list_mission_profiles', value: 'list_mission_profiles' }
    ]}
>
<TabItem value="get_mission_profile">

Returns a mission profile.

```sql
SELECT
name,
contact_post_pass_duration_seconds,
contact_pre_pass_duration_seconds,
dataflow_edges,
minimum_viable_contact_duration_seconds,
mission_profile_arn,
mission_profile_id,
region,
streams_kms_key,
streams_kms_role,
tags,
telemetry_sink_config_arn,
tracking_config_arn
FROM aws.groundstation.mission_profiles
WHERE mission_profile_id = '{{ mission_profile_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_mission_profiles">

Returns a list of mission profiles.

```sql
SELECT
name,
mission_profile_arn,
mission_profile_id,
region
FROM aws.groundstation.mission_profiles
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_mission_profile"
    values={[
        { label: 'create_mission_profile', value: 'create_mission_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_mission_profile">

Creates a mission profile. dataflowEdges is a list of lists of strings. Each lower level list of strings has two elements: a from ARN and a to ARN.

```sql
INSERT INTO aws.groundstation.mission_profiles (
name,
contactPrePassDurationSeconds,
contactPostPassDurationSeconds,
minimumViableContactDurationSeconds,
dataflowEdges,
trackingConfigArn,
telemetrySinkConfigArn,
tags,
streamsKmsKey,
streamsKmsRole,
region
)
SELECT 
'{{ name }}' /* required */,
{{ contactPrePassDurationSeconds }},
{{ contactPostPassDurationSeconds }},
{{ minimumViableContactDurationSeconds }} /* required */,
'{{ dataflowEdges }}' /* required */,
'{{ trackingConfigArn }}' /* required */,
'{{ telemetrySinkConfigArn }}',
'{{ tags }}',
'{{ streamsKmsKey }}',
'{{ streamsKmsRole }}',
'{{ region }}'
RETURNING
mission_profile_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mission_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the mission_profiles resource.
    - name: name
      value: "{{ name }}"
    - name: contactPrePassDurationSeconds
      value: {{ contactPrePassDurationSeconds }}
    - name: contactPostPassDurationSeconds
      value: {{ contactPostPassDurationSeconds }}
    - name: minimumViableContactDurationSeconds
      value: {{ minimumViableContactDurationSeconds }}
    - name: dataflowEdges
      value:
        - "{{ dataflowEdges }}"
    - name: trackingConfigArn
      value: "{{ trackingConfigArn }}"
    - name: telemetrySinkConfigArn
      value: "{{ telemetrySinkConfigArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: streamsKmsKey
      description: |
        KMS key info.
      value:
        kmsKeyArn: "{{ kmsKeyArn }}"
        kmsAliasArn: "{{ kmsAliasArn }}"
        kmsAliasName: "{{ kmsAliasName }}"
    - name: streamsKmsRole
      value: "{{ streamsKmsRole }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_mission_profile"
    values={[
        { label: 'update_mission_profile', value: 'update_mission_profile' }
    ]}
>
<TabItem value="update_mission_profile">

Updates a mission profile. Updating a mission profile will not update the execution parameters for existing future contacts.

```sql
UPDATE aws.groundstation.mission_profiles
SET 
name = '{{ name }}',
contactPrePassDurationSeconds = {{ contactPrePassDurationSeconds }},
contactPostPassDurationSeconds = {{ contactPostPassDurationSeconds }},
minimumViableContactDurationSeconds = {{ minimumViableContactDurationSeconds }},
dataflowEdges = '{{ dataflowEdges }}',
trackingConfigArn = '{{ trackingConfigArn }}',
telemetrySinkConfigArn = '{{ telemetrySinkConfigArn }}',
streamsKmsKey = '{{ streamsKmsKey }}',
streamsKmsRole = '{{ streamsKmsRole }}'
WHERE 
mission_profile_id = '{{ mission_profile_id }}' --required
AND region = '{{ region }}' --required
RETURNING
mission_profile_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_mission_profile"
    values={[
        { label: 'delete_mission_profile', value: 'delete_mission_profile' }
    ]}
>
<TabItem value="delete_mission_profile">

Deletes a mission profile.

```sql
DELETE FROM aws.groundstation.mission_profiles
WHERE mission_profile_id = '{{ mission_profile_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reserve_contact"
    values={[
        { label: 'reserve_contact', value: 'reserve_contact' }
    ]}
>
<TabItem value="reserve_contact">

Reserves a contact using specified parameters.

```sql
EXEC aws.groundstation.mission_profiles.reserve_contact 
@region='{{ region }}' --required 
@@json=
'{
"missionProfileArn": "{{ missionProfileArn }}", 
"satelliteArn": "{{ satelliteArn }}", 
"startTime": "{{ startTime }}", 
"endTime": "{{ endTime }}", 
"groundStation": "{{ groundStation }}", 
"tags": "{{ tags }}", 
"trackingOverrides": "{{ trackingOverrides }}"
}'
;
```
</TabItem>
</Tabs>
