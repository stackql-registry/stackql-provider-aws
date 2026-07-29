--- 
title: landing_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - landing_zones
  - controltower
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

Creates, updates, deletes, gets or lists a <code>landing_zones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="landing_zones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.controltower.landing_zones" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_landing_zone"
    values={[
        { label: 'get_landing_zone', value: 'get_landing_zone' },
        { label: 'list_landing_zones', value: 'list_landing_zones' }
    ]}
>
<TabItem value="get_landing_zone">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the landing zone. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="drift_status" /></td>
    <td><code>object</code></td>
    <td>The drift status of the landing zone.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_available_version" /></td>
    <td><code>string</code></td>
    <td>The latest available version of the landing zone. (pattern: &lt;code&gt;\d+.\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="manifest" /></td>
    <td><code>object</code></td>
    <td>The landing zone manifest JSON text file that specifies the landing zone configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="remediation_types" /></td>
    <td><code>array</code></td>
    <td>The types of remediation actions configured for the landing zone, such as automatic drift correction or compliance enforcement.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The landing zone deployment status. One of ACTIVE, PROCESSING, FAILED. (ACTIVE, PROCESSING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The landing zone's current deployed version. (pattern: &lt;code&gt;\d+.\d+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_landing_zones">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the landing zone. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_landing_zone"><CopyableCode code="get_landing_zone" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about the landing zone. Displays a message in case of error.</td>
</tr>
<tr>
    <td><a href="#list_landing_zones"><CopyableCode code="list_landing_zones" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the landing zone ARN for the landing zone deployed in your managed account. This API also creates an ARN for existing accounts that do not yet have a landing zone ARN. Returns one landing zone ARN.</td>
</tr>
<tr>
    <td><a href="#create_landing_zone"><CopyableCode code="create_landing_zone" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Creates a new landing zone. This API call starts an asynchronous operation that creates and configures a landing zone, based on the parameters specified in the manifest JSON file.</td>
</tr>
<tr>
    <td><a href="#update_landing_zone"><CopyableCode code="update_landing_zone" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-landingZoneIdentifier"><code>landingZoneIdentifier</code></a></td>
    <td></td>
    <td>This API call updates the landing zone. It starts an asynchronous operation that updates the landing zone based on the new landing zone version, or on the changed parameters specified in the updated manifest file.</td>
</tr>
<tr>
    <td><a href="#delete_landing_zone"><CopyableCode code="delete_landing_zone" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Decommissions a landing zone. This API call starts an asynchronous operation that deletes Amazon Web Services Control Tower resources deployed in accounts managed by Amazon Web Services Control Tower. Decommissioning a landing zone is a process with significant consequences, and it cannot be undone. We strongly recommend that you perform this decommissioning process only if you intend to stop using your landing zone.</td>
</tr>
<tr>
    <td><a href="#reset_landing_zone"><CopyableCode code="reset_landing_zone" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-landingZoneIdentifier"><code>landingZoneIdentifier</code></a></td>
    <td></td>
    <td>This API call resets a landing zone. It starts an asynchronous operation that resets the landing zone to the parameters specified in the original configuration, which you specified in the manifest file. Nothing in the manifest file's original landing zone configuration is changed during the reset process, by default. This API is not the same as a rollback of a landing zone version, which is not a supported operation.</td>
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
    defaultValue="get_landing_zone"
    values={[
        { label: 'get_landing_zone', value: 'get_landing_zone' },
        { label: 'list_landing_zones', value: 'list_landing_zones' }
    ]}
>
<TabItem value="get_landing_zone">

Returns details about the landing zone. Displays a message in case of error.

```sql
SELECT
arn,
drift_status,
latest_available_version,
manifest,
remediation_types,
status,
version
FROM aws.controltower.landing_zones
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_landing_zones">

Returns the landing zone ARN for the landing zone deployed in your managed account. This API also creates an ARN for existing accounts that do not yet have a landing zone ARN. Returns one landing zone ARN.

```sql
SELECT
arn
FROM aws.controltower.landing_zones
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_landing_zone"
    values={[
        { label: 'create_landing_zone', value: 'create_landing_zone' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_landing_zone">

Creates a new landing zone. This API call starts an asynchronous operation that creates and configures a landing zone, based on the parameters specified in the manifest JSON file.

```sql
INSERT INTO aws.controltower.landing_zones (
version,
remediationTypes,
tags,
manifest,
region
)
SELECT 
'{{ version }}' /* required */,
'{{ remediationTypes }}',
'{{ tags }}',
'{{ manifest }}',
'{{ region }}'
RETURNING
arn,
operation_identifier
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: landing_zones
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the landing_zones resource.
    - name: version
      value: "{{ version }}"
    - name: remediationTypes
      value:
        - "{{ remediationTypes }}"
    - name: tags
      value: "{{ tags }}"
    - name: manifest
      value: "{{ manifest }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_landing_zone"
    values={[
        { label: 'update_landing_zone', value: 'update_landing_zone' }
    ]}
>
<TabItem value="update_landing_zone">

This API call updates the landing zone. It starts an asynchronous operation that updates the landing zone based on the new landing zone version, or on the changed parameters specified in the updated manifest file.

```sql
UPDATE aws.controltower.landing_zones
SET 
version = '{{ version }}',
remediationTypes = '{{ remediationTypes }}',
landingZoneIdentifier = '{{ landingZoneIdentifier }}',
manifest = '{{ manifest }}'
WHERE 
region = '{{ region }}' --required
AND version = '{{ version }}' --required
AND landingZoneIdentifier = '{{ landingZoneIdentifier }}' --required
RETURNING
operation_identifier;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_landing_zone"
    values={[
        { label: 'delete_landing_zone', value: 'delete_landing_zone' }
    ]}
>
<TabItem value="delete_landing_zone">

Decommissions a landing zone. This API call starts an asynchronous operation that deletes Amazon Web Services Control Tower resources deployed in accounts managed by Amazon Web Services Control Tower. Decommissioning a landing zone is a process with significant consequences, and it cannot be undone. We strongly recommend that you perform this decommissioning process only if you intend to stop using your landing zone.

```sql
DELETE FROM aws.controltower.landing_zones
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_landing_zone"
    values={[
        { label: 'reset_landing_zone', value: 'reset_landing_zone' }
    ]}
>
<TabItem value="reset_landing_zone">

This API call resets a landing zone. It starts an asynchronous operation that resets the landing zone to the parameters specified in the original configuration, which you specified in the manifest file. Nothing in the manifest file's original landing zone configuration is changed during the reset process, by default. This API is not the same as a rollback of a landing zone version, which is not a supported operation.

```sql
EXEC aws.controltower.landing_zones.reset_landing_zone 
@region='{{ region }}' --required 
@@json=
'{
"landingZoneIdentifier": "{{ landingZoneIdentifier }}"
}'
;
```
</TabItem>
</Tabs>
