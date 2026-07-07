--- 
title: ephemeris
hide_title: false
hide_table_of_contents: false
keywords:
  - ephemeris
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

Creates, updates, deletes, gets or lists an <code>ephemeris</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ephemeris" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.ephemeris" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ephemeris"
    values={[
        { label: 'describe_ephemeris', value: 'describe_ephemeris' }
    ]}
>
<TabItem value="describe_ephemeris">

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
    <td>A name that you can use to identify the ephemeris. (pattern: &lt;code&gt;&#91; a-zA-Z0-9_:-&#93;&#123;1,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the ephemeris was uploaded in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the ephemeris is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="ephemerisId" /></td>
    <td><code>string</code></td>
    <td>The AWS Ground Station ephemeris ID. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errorReasons" /></td>
    <td><code>array</code></td>
    <td>Detailed error information for ephemerides with INVALID status. Provides specific error codes and messages to help diagnose validation failures.</td>
</tr>
<tr>
    <td><CopyableCode code="invalidReason" /></td>
    <td><code>string</code></td>
    <td>Reason that an ephemeris failed validation. Appears only when the status is INVALID. (METADATA_INVALID, TIME_RANGE_INVALID, TRAJECTORY_INVALID, KMS_KEY_INVALID, VALIDATION_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>A priority score that determines which ephemeris to use when multiple ephemerides overlap. Higher numbers take precedence. The default is 1. Must be 1 or greater.</td>
</tr>
<tr>
    <td><CopyableCode code="satelliteId" /></td>
    <td><code>string</code></td>
    <td>The AWS Ground Station satellite ID associated with ephemeris. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ephemeris. (VALIDATING, INVALID, ERROR, ENABLED, DISABLED, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="suppliedData" /></td>
    <td><code>object</code></td>
    <td>Supplied ephemeris data.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to an ephemeris.</td>
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
    <td><a href="#describe_ephemeris"><CopyableCode code="describe_ephemeris" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ephemeris_id"><code>ephemeris_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve information about an existing ephemeris.</td>
</tr>
<tr>
    <td><a href="#create_ephemeris"><CopyableCode code="create_ephemeris" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create an ephemeris with your specified EphemerisData.</td>
</tr>
<tr>
    <td><a href="#update_ephemeris"><CopyableCode code="update_ephemeris" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ephemeris_id"><code>ephemeris_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-enabled"><code>enabled</code></a></td>
    <td></td>
    <td>Update an existing ephemeris.</td>
</tr>
<tr>
    <td><a href="#delete_ephemeris"><CopyableCode code="delete_ephemeris" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ephemeris_id"><code>ephemeris_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an ephemeris.</td>
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
<tr id="parameter-ephemeris_id">
    <td><CopyableCode code="ephemeris_id" /></td>
    <td><code>string</code></td>
    <td>The AWS Ground Station ephemeris ID.</td>
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
    defaultValue="describe_ephemeris"
    values={[
        { label: 'describe_ephemeris', value: 'describe_ephemeris' }
    ]}
>
<TabItem value="describe_ephemeris">

Retrieve information about an existing ephemeris.

```sql
SELECT
name,
creationTime,
enabled,
ephemerisId,
errorReasons,
invalidReason,
priority,
satelliteId,
status,
suppliedData,
tags
FROM aws.groundstation.ephemeris
WHERE ephemeris_id = '{{ ephemeris_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ephemeris"
    values={[
        { label: 'create_ephemeris', value: 'create_ephemeris' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ephemeris">

Create an ephemeris with your specified EphemerisData.

```sql
INSERT INTO aws.groundstation.ephemeris (
satelliteId,
enabled,
priority,
expirationTime,
name,
kmsKeyArn,
ephemeris,
tags,
region
)
SELECT 
'{{ satelliteId }}',
{{ enabled }},
{{ priority }},
'{{ expirationTime }}',
'{{ name }}' /* required */,
'{{ kmsKeyArn }}',
'{{ ephemeris }}',
'{{ tags }}',
'{{ region }}'
RETURNING
ephemerisId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ephemeris
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ephemeris resource.
    - name: satelliteId
      value: "{{ satelliteId }}"
    - name: enabled
      value: {{ enabled }}
    - name: priority
      value: {{ priority }}
    - name: expirationTime
      value: "{{ expirationTime }}"
    - name: name
      value: "{{ name }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
    - name: ephemeris
      description: |
        Ephemeris data.
      value:
        tle:
          s3Object:
            bucket: "{{ bucket }}"
            key: "{{ key }}"
            version: "{{ version }}"
          tleData:
            - tleLine1: "{{ tleLine1 }}"
              tleLine2: "{{ tleLine2 }}"
              validTimeRange:
                startTime: "{{ startTime }}"
                endTime: "{{ endTime }}"
        oem:
          s3Object:
            bucket: "{{ bucket }}"
            key: "{{ key }}"
            version: "{{ version }}"
          oemData: "{{ oemData }}"
        azEl:
          groundStation: "{{ groundStation }}"
          data:
            s3Object:
              bucket: "{{ bucket }}"
              key: "{{ key }}"
              version: "{{ version }}"
            azElData:
              angleUnit: "{{ angleUnit }}"
              azElSegmentList:
                - referenceEpoch: "{{ referenceEpoch }}"
                  validTimeRange:
                    startTime: "{{ startTime }}"
                    endTime: "{{ endTime }}"
                  azElList: "{{ azElList }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ephemeris"
    values={[
        { label: 'update_ephemeris', value: 'update_ephemeris' }
    ]}
>
<TabItem value="update_ephemeris">

Update an existing ephemeris.

```sql
UPDATE aws.groundstation.ephemeris
SET 
enabled = {{ enabled }},
name = '{{ name }}',
priority = {{ priority }}
WHERE 
ephemeris_id = '{{ ephemeris_id }}' --required
AND region = '{{ region }}' --required
AND enabled = {{ enabled }} --required
RETURNING
ephemerisId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ephemeris"
    values={[
        { label: 'delete_ephemeris', value: 'delete_ephemeris' }
    ]}
>
<TabItem value="delete_ephemeris">

Delete an ephemeris.

```sql
DELETE FROM aws.groundstation.ephemeris
WHERE ephemeris_id = '{{ ephemeris_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
