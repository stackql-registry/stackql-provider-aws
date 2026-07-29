--- 
title: software_update_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - software_update_jobs
  - greengrass
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

Creates, updates, deletes, gets or lists a <code>software_update_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="software_update_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.software_update_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_software_update_job"><CopyableCode code="create_software_update_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-S3UrlSignerRole"><code>S3UrlSignerRole</code></a>, <a href="#parameter-SoftwareToUpdate"><code>SoftwareToUpdate</code></a>, <a href="#parameter-UpdateTargets"><code>UpdateTargets</code></a>, <a href="#parameter-UpdateTargetsArchitecture"><code>UpdateTargetsArchitecture</code></a>, <a href="#parameter-UpdateTargetsOperatingSystem"><code>UpdateTargetsOperatingSystem</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.</td>
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
<tr id="parameter-X-Amzn-Client-Token">
    <td><CopyableCode code="X-Amzn-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A client token used to correlate requests and responses.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_software_update_job"
    values={[
        { label: 'create_software_update_job', value: 'create_software_update_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_software_update_job">

Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.

```sql
INSERT INTO aws.greengrass.software_update_jobs (
S3UrlSignerRole,
SoftwareToUpdate,
UpdateAgentLogLevel,
UpdateTargets,
UpdateTargetsArchitecture,
UpdateTargetsOperatingSystem,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ S3UrlSignerRole }}' /* required */,
'{{ SoftwareToUpdate }}' /* required */,
'{{ UpdateAgentLogLevel }}',
'{{ UpdateTargets }}' /* required */,
'{{ UpdateTargetsArchitecture }}' /* required */,
'{{ UpdateTargetsOperatingSystem }}' /* required */,
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
iot_job_arn,
iot_job_id,
platform_software_version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: software_update_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the software_update_jobs resource.
    - name: S3UrlSignerRole
      value: "{{ S3UrlSignerRole }}"
      description: |
        The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
    - name: SoftwareToUpdate
      value: "{{ SoftwareToUpdate }}"
      description: |
        The piece of software on the Greengrass core that will be updated.
      valid_values: ['core', 'ota_agent']
    - name: UpdateAgentLogLevel
      value: "{{ UpdateAgentLogLevel }}"
      description: |
        The minimum level of log statements that should be logged by the OTA Agent during an update.
      valid_values: ['NONE', 'TRACE', 'DEBUG', 'VERBOSE', 'INFO', 'WARN', 'ERROR', 'FATAL']
    - name: UpdateTargets
      value:
        - "{{ UpdateTargets }}"
      description: |
        The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
    - name: UpdateTargetsArchitecture
      value: "{{ UpdateTargetsArchitecture }}"
      description: |
        The architecture of the cores which are the targets of an update.
      valid_values: ['armv6l', 'armv7l', 'x86_64', 'aarch64']
    - name: UpdateTargetsOperatingSystem
      value: "{{ UpdateTargetsOperatingSystem }}"
      description: |
        The operating system of the cores which are the targets of an update.
      valid_values: ['ubuntu', 'raspbian', 'amazon_linux', 'openwrt']
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A client token used to correlate requests and responses.
      description: A client token used to correlate requests and responses.
`}</CodeBlock>

</TabItem>
</Tabs>
