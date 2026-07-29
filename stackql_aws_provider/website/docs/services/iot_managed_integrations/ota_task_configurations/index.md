--- 
title: ota_task_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - ota_task_configurations
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists an <code>ota_task_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ota_task_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.ota_task_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ota_task_configuration"
    values={[
        { label: 'get_ota_task_configuration', value: 'get_ota_task_configuration' },
        { label: 'list_ota_task_configurations', value: 'list_ota_task_configurations' }
    ]}
>
<TabItem value="get_ota_task_configuration">

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
    <td>The timestamp value of when the over-the-air (OTA) task configuration was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the over-the-air (OTA) task configuration. (pattern: &lt;code&gt;&#91;0-9A-Za-z_\- &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the over-the-air (OTA) task configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="push_config" /></td>
    <td><code>object</code></td>
    <td>Structure representing a push config.</td>
</tr>
<tr>
    <td><CopyableCode code="task_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The over-the-air (OTA) task configuration id. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ota_task_configurations">

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
    <td>The timestamp value of when the over-the-air (OTA) task configuration was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the over-the-air (OTA) task configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The id of the over-the-air (OTA) task configuration (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_ota_task_configuration"><CopyableCode code="get_ota_task_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a configuraiton for the over-the-air (OTA) task.</td>
</tr>
<tr>
    <td><a href="#list_ota_task_configurations"><CopyableCode code="list_ota_task_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>List all of the over-the-air (OTA) task configurations.</td>
</tr>
<tr>
    <td><a href="#create_ota_task_configuration"><CopyableCode code="create_ota_task_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a configuraiton for the over-the-air (OTA) task.</td>
</tr>
<tr>
    <td><a href="#delete_ota_task_configuration"><CopyableCode code="delete_ota_task_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the over-the-air (OTA) task configuration.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the over-the-air (OTA) task configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ota_task_configuration"
    values={[
        { label: 'get_ota_task_configuration', value: 'get_ota_task_configuration' },
        { label: 'list_ota_task_configurations', value: 'list_ota_task_configurations' }
    ]}
>
<TabItem value="get_ota_task_configuration">

Get a configuraiton for the over-the-air (OTA) task.

```sql
SELECT
created_at,
description,
name,
push_config,
task_configuration_id
FROM aws.iot_managed_integrations.ota_task_configurations
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ota_task_configurations">

List all of the over-the-air (OTA) task configurations.

```sql
SELECT
created_at,
name,
task_configuration_id
FROM aws.iot_managed_integrations.ota_task_configurations
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ota_task_configuration"
    values={[
        { label: 'create_ota_task_configuration', value: 'create_ota_task_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ota_task_configuration">

Create a configuraiton for the over-the-air (OTA) task.

```sql
INSERT INTO aws.iot_managed_integrations.ota_task_configurations (
Description,
Name,
PushConfig,
ClientToken,
region
)
SELECT 
'{{ Description }}',
'{{ Name }}',
'{{ PushConfig }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
task_configuration_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ota_task_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ota_task_configurations resource.
    - name: Description
      value: "{{ Description }}"
    - name: Name
      value: "{{ Name }}"
    - name: PushConfig
      description: |
        Structure representing a push config.
      value:
        AbortConfig:
          AbortConfigCriteriaList:
            - Action: "{{ Action }}"
              FailureType: "{{ FailureType }}"
              MinNumberOfExecutedThings: {{ MinNumberOfExecutedThings }}
              ThresholdPercentage: {{ ThresholdPercentage }}
        RolloutConfig:
          ExponentialRolloutRate:
            BaseRatePerMinute: {{ BaseRatePerMinute }}
            IncrementFactor: {{ IncrementFactor }}
            RateIncreaseCriteria:
              numberOfNotifiedThings: {{ numberOfNotifiedThings }}
              numberOfSucceededThings: {{ numberOfSucceededThings }}
          MaximumPerMinute: {{ MaximumPerMinute }}
        TimeoutConfig:
          InProgressTimeoutInMinutes: {{ InProgressTimeoutInMinutes }}
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ota_task_configuration"
    values={[
        { label: 'delete_ota_task_configuration', value: 'delete_ota_task_configuration' }
    ]}
>
<TabItem value="delete_ota_task_configuration">

Delete the over-the-air (OTA) task configuration.

```sql
DELETE FROM aws.iot_managed_integrations.ota_task_configurations
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
