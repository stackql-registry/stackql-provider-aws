--- 
title: microvm_image_builds
hide_title: false
hide_table_of_contents: false
keywords:
  - microvm_image_builds
  - lambda_microvms
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

Creates, updates, deletes, gets or lists a <code>microvm_image_builds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="microvm_image_builds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda_microvms.microvm_image_builds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_microvm_image_build"
    values={[
        { label: 'get_microvm_image_build', value: 'get_microvm_image_build' },
        { label: 'list_microvm_image_builds', value: 'list_microvm_image_builds' }
    ]}
>
<TabItem value="get_microvm_image_build">

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
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>The target CPU architecture for the build. Supported value: ARM_64. (ARM_64)</td>
</tr>
<tr>
    <td><CopyableCode code="build_id" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="build_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the build. (PENDING, IN_PROGRESS, SUCCESSFUL, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="chipset" /></td>
    <td><code>string</code></td>
    <td>The target chipset for the build. (GRAVITON)</td>
</tr>
<tr>
    <td><CopyableCode code="chipset_generation" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the build was created.</td>
</tr>
<tr>
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_version" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_build" /></td>
    <td><code>object</code></td>
    <td>The snapshot build details, including memory and disk snapshot sizes.</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the build state, if applicable.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_microvm_image_builds">

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
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>The target CPU architecture for the build. Supported value: ARM_64. (ARM_64)</td>
</tr>
<tr>
    <td><CopyableCode code="build_id" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="build_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the build. (PENDING, IN_PROGRESS, SUCCESSFUL, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="chipset" /></td>
    <td><code>string</code></td>
    <td>The target chipset for the build. (GRAVITON)</td>
</tr>
<tr>
    <td><CopyableCode code="chipset_generation" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the build was created.</td>
</tr>
<tr>
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_version" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the build state, if applicable.</td>
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
    <td><a href="#get_microvm_image_build"><CopyableCode code="get_microvm_image_build" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-image_identifier"><code>image_identifier</code></a>, <a href="#parameter-image_version"><code>image_version</code></a>, <a href="#parameter-build_id"><code>build_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a specific MicroVM image build, including its state, target architecture, and snapshot information.</td>
</tr>
<tr>
    <td><a href="#list_microvm_image_builds"><CopyableCode code="list_microvm_image_builds" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-image_identifier"><code>image_identifier</code></a>, <a href="#parameter-image_version"><code>image_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-architecture"><code>architecture</code></a>, <a href="#parameter-chipset"><code>chipset</code></a>, <a href="#parameter-chipsetGeneration"><code>chipsetGeneration</code></a></td>
    <td>Lists builds for a MicroVM image version with optional filtering by architecture and chipset. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
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
<tr id="parameter-build_id">
    <td><CopyableCode code="build_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the build to retrieve.</td>
</tr>
<tr id="parameter-image_identifier">
    <td><CopyableCode code="image_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ARN or ID) of the MicroVM image.</td>
</tr>
<tr id="parameter-image_version">
    <td><CopyableCode code="image_version" /></td>
    <td><code>string</code></td>
    <td>The version of the MicroVM image to list builds for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-architecture">
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>Filters builds by target CPU architecture.</td>
</tr>
<tr id="parameter-chipset">
    <td><CopyableCode code="chipset" /></td>
    <td><code>string</code></td>
    <td>Filters builds by target chipset.</td>
</tr>
<tr id="parameter-chipsetGeneration">
    <td><CopyableCode code="chipsetGeneration" /></td>
    <td><code>string</code></td>
    <td>Filters builds by target chipset generation.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous call. Use this token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_microvm_image_build"
    values={[
        { label: 'get_microvm_image_build', value: 'get_microvm_image_build' },
        { label: 'list_microvm_image_builds', value: 'list_microvm_image_builds' }
    ]}
>
<TabItem value="get_microvm_image_build">

Retrieves the details of a specific MicroVM image build, including its state, target architecture, and snapshot information.

```sql
SELECT
architecture,
build_id,
build_state,
chipset,
chipset_generation,
created_at,
image_arn,
image_version,
snapshot_build,
state_reason
FROM aws.lambda_microvms.microvm_image_builds
WHERE image_identifier = '{{ image_identifier }}' -- required
AND image_version = '{{ image_version }}' -- required
AND build_id = '{{ build_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_microvm_image_builds">

Lists builds for a MicroVM image version with optional filtering by architecture and chipset. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
architecture,
build_id,
build_state,
chipset,
chipset_generation,
created_at,
image_arn,
image_version,
state_reason
FROM aws.lambda_microvms.microvm_image_builds
WHERE image_identifier = '{{ image_identifier }}' -- required
AND image_version = '{{ image_version }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND architecture = '{{ architecture }}'
AND chipset = '{{ chipset }}'
AND chipsetGeneration = '{{ chipsetGeneration }}'
;
```
</TabItem>
</Tabs>
