--- 
title: stages
hide_title: false
hide_table_of_contents: false
keywords:
  - stages
  - ivs_realtime
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

Creates, updates, deletes, gets or lists a <code>stages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs_realtime.stages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stage"
    values={[
        { label: 'get_stage', value: 'get_stage' },
        { label: 'list_stages', value: 'list_stages' }
    ]}
>
<TabItem value="get_stage">

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
    <td>Stage name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="activeSessionId" /></td>
    <td><code>string</code></td>
    <td>ID of the active session within the stage. (pattern: &lt;code&gt;st-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Stage ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:stage/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autoParticipantRecordingConfiguration" /></td>
    <td><code>object</code></td>
    <td>Object specifying a configuration for individual participant recording.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>object</code></td>
    <td>Summary information about various endpoints for a stage.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Best practices and strategies in Tagging AWS Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stages">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If there are more stages than maxResults, use nextToken in the request to get the next set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+/=_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stages" /></td>
    <td><code>array</code></td>
    <td>List of the matching stages (summary information only).</td>
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
    <td><a href="#get_stage"><CopyableCode code="get_stage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information for the specified stage.</td>
</tr>
<tr>
    <td><a href="#list_stages"><CopyableCode code="list_stages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about all stages in your account, in the AWS region where the API request is processed.</td>
</tr>
<tr>
    <td><a href="#create_stage"><CopyableCode code="create_stage" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new stage (and optionally participant tokens).</td>
</tr>
<tr>
    <td><a href="#update_stage"><CopyableCode code="update_stage" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates a stage’s configuration.</td>
</tr>
<tr>
    <td><a href="#delete_stage"><CopyableCode code="delete_stage" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Shuts down and deletes the specified stage (disconnecting all participants). This operation also removes the stageArn from the associated IngestConfiguration, if there are participants using the IngestConfiguration to publish to the stage.</td>
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
    defaultValue="get_stage"
    values={[
        { label: 'get_stage', value: 'get_stage' },
        { label: 'list_stages', value: 'list_stages' }
    ]}
>
<TabItem value="get_stage">

Gets information for the specified stage.

```sql
SELECT
name,
activeSessionId,
arn,
autoParticipantRecordingConfiguration,
endpoints,
tags
FROM aws.ivs_realtime.stages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_stages">

Gets summary information about all stages in your account, in the AWS region where the API request is processed.

```sql
SELECT
nextToken,
stages
FROM aws.ivs_realtime.stages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stage"
    values={[
        { label: 'create_stage', value: 'create_stage' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stage">

Creates a new stage (and optionally participant tokens).

```sql
INSERT INTO aws.ivs_realtime.stages (
name,
participantTokenConfigurations,
tags,
autoParticipantRecordingConfiguration,
region
)
SELECT 
'{{ name }}',
'{{ participantTokenConfigurations }}',
'{{ tags }}',
'{{ autoParticipantRecordingConfiguration }}',
'{{ region }}'
RETURNING
participantTokens,
stage
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stages
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stages resource.
    - name: name
      value: "{{ name }}"
    - name: participantTokenConfigurations
      value:
        - duration: {{ duration }}
          userId: "{{ userId }}"
          attributes: "{{ attributes }}"
          capabilities: "{{ capabilities }}"
    - name: tags
      value: "{{ tags }}"
    - name: autoParticipantRecordingConfiguration
      description: |
        Object specifying a configuration for individual participant recording.
      value:
        storageConfigurationArn: "{{ storageConfigurationArn }}"
        mediaTypes:
          - "{{ mediaTypes }}"
        thumbnailConfiguration:
          targetIntervalSeconds: {{ targetIntervalSeconds }}
          storage:
            - "{{ storage }}"
          recordingMode: "{{ recordingMode }}"
        recordingReconnectWindowSeconds: {{ recordingReconnectWindowSeconds }}
        hlsConfiguration:
          targetSegmentDurationSeconds: {{ targetSegmentDurationSeconds }}
        recordParticipantReplicas: {{ recordParticipantReplicas }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_stage"
    values={[
        { label: 'update_stage', value: 'update_stage' }
    ]}
>
<TabItem value="update_stage">

Updates a stage’s configuration.

```sql
UPDATE aws.ivs_realtime.stages
SET 
arn = '{{ arn }}',
name = '{{ name }}',
autoParticipantRecordingConfiguration = '{{ autoParticipantRecordingConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
stage;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stage"
    values={[
        { label: 'delete_stage', value: 'delete_stage' }
    ]}
>
<TabItem value="delete_stage">

Shuts down and deletes the specified stage (disconnecting all participants). This operation also removes the stageArn from the associated IngestConfiguration, if there are participants using the IngestConfiguration to publish to the stage.

```sql
DELETE FROM aws.ivs_realtime.stages
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
