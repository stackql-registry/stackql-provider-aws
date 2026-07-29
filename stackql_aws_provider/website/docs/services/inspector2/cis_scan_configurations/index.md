--- 
title: cis_scan_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - cis_scan_configurations
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>cis_scan_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cis_scan_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.cis_scan_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cis_scan_configurations"
    values={[
        { label: 'list_cis_scan_configurations', value: 'list_cis_scan_configurations' }
    ]}
>
<TabItem value="list_cis_scan_configurations">

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
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The CIS scan configuration's owner ID. (pattern: &lt;code&gt;\d&#123;12&#125;|o-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The CIS scan configuration's scan configuration ARN. (pattern: &lt;code&gt;arn:aws(-us-gov|-cn)?:inspector2:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;:&#91;0-9&#93;&#123;12&#125;:owner/(o-&#91;a-z0-9&#93;+|&#91;0-9&#93;&#123;12&#125;)/cis-configuration/&#91;0-9a-fA-F-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_name" /></td>
    <td><code>string</code></td>
    <td>The name of the CIS scan configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>A schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="security_level" /></td>
    <td><code>string</code></td>
    <td>The CIS scan configuration's security level. (LEVEL_1, LEVEL_2)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The CIS scan configuration's tags.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>object</code></td>
    <td>The CIS scan configuration's targets.</td>
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
    <td><a href="#list_cis_scan_configurations"><CopyableCode code="list_cis_scan_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists CIS scan configurations.</td>
</tr>
<tr>
    <td><a href="#create_cis_scan_configuration"><CopyableCode code="create_cis_scan_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scanName"><code>scanName</code></a>, <a href="#parameter-securityLevel"><code>securityLevel</code></a>, <a href="#parameter-schedule"><code>schedule</code></a>, <a href="#parameter-targets"><code>targets</code></a></td>
    <td></td>
    <td>Creates a CIS scan configuration.</td>
</tr>
<tr>
    <td><a href="#update_cis_scan_configuration"><CopyableCode code="update_cis_scan_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scanConfigurationArn"><code>scanConfigurationArn</code></a></td>
    <td></td>
    <td>Updates a CIS scan configuration.</td>
</tr>
<tr>
    <td><a href="#delete_cis_scan_configuration"><CopyableCode code="delete_cis_scan_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a CIS scan configuration.</td>
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
    defaultValue="list_cis_scan_configurations"
    values={[
        { label: 'list_cis_scan_configurations', value: 'list_cis_scan_configurations' }
    ]}
>
<TabItem value="list_cis_scan_configurations">

Lists CIS scan configurations.

```sql
SELECT
owner_id,
scan_configuration_arn,
scan_name,
schedule,
security_level,
tags,
targets
FROM aws.inspector2.cis_scan_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cis_scan_configuration"
    values={[
        { label: 'create_cis_scan_configuration', value: 'create_cis_scan_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cis_scan_configuration">

Creates a CIS scan configuration.

```sql
INSERT INTO aws.inspector2.cis_scan_configurations (
scanName,
securityLevel,
schedule,
targets,
tags,
region
)
SELECT 
'{{ scanName }}' /* required */,
'{{ securityLevel }}' /* required */,
'{{ schedule }}' /* required */,
'{{ targets }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
scan_configuration_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cis_scan_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cis_scan_configurations resource.
    - name: scanName
      value: "{{ scanName }}"
    - name: securityLevel
      value: "{{ securityLevel }}"
      valid_values: ['LEVEL_1', 'LEVEL_2']
    - name: schedule
      description: |
        A schedule.
      value:
        oneTime: "{{ oneTime }}"
        daily:
          startTime:
            timeOfDay: "{{ timeOfDay }}"
            timezone: "{{ timezone }}"
        weekly:
          startTime:
            timeOfDay: "{{ timeOfDay }}"
            timezone: "{{ timezone }}"
          days:
            - "{{ days }}"
        monthly:
          startTime:
            timeOfDay: "{{ timeOfDay }}"
            timezone: "{{ timezone }}"
          day: "{{ day }}"
    - name: targets
      description: |
        Creates CIS targets.
      value:
        accountIds:
          - "{{ accountIds }}"
        targetResourceTags: "{{ targetResourceTags }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cis_scan_configuration"
    values={[
        { label: 'update_cis_scan_configuration', value: 'update_cis_scan_configuration' }
    ]}
>
<TabItem value="update_cis_scan_configuration">

Updates a CIS scan configuration.

```sql
UPDATE aws.inspector2.cis_scan_configurations
SET 
scanConfigurationArn = '{{ scanConfigurationArn }}',
scanName = '{{ scanName }}',
securityLevel = '{{ securityLevel }}',
schedule = '{{ schedule }}',
targets = '{{ targets }}'
WHERE 
region = '{{ region }}' --required
AND scanConfigurationArn = '{{ scanConfigurationArn }}' --required
RETURNING
scan_configuration_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cis_scan_configuration"
    values={[
        { label: 'delete_cis_scan_configuration', value: 'delete_cis_scan_configuration' }
    ]}
>
<TabItem value="delete_cis_scan_configuration">

Deletes a CIS scan configuration.

```sql
DELETE FROM aws.inspector2.cis_scan_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
