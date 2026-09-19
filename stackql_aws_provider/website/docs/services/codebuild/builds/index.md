--- 
title: builds
hide_title: false
hide_table_of_contents: false
keywords:
  - builds
  - codebuild
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

Creates, updates, deletes, gets or lists a <code>builds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="builds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.builds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_builds"
    values={[
        { label: 'batch_get_builds', value: 'batch_get_builds' },
        { label: 'list_builds_for_project', value: 'list_builds_for_project' },
        { label: 'list_builds', value: 'list_builds' }
    ]}
>
<TabItem value="batch_get_builds">

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
    <td><CopyableCode code="builds" /></td>
    <td><code>array</code></td>
    <td>Information about the requested builds.</td>
</tr>
<tr>
    <td><CopyableCode code="builds_not_found" /></td>
    <td><code>array</code></td>
    <td>The IDs of builds for which information could not be found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_builds_for_project">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A list of build identifiers for the specified build project, with each build ID representing a single build.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_builds">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A list of build IDs, with each build ID representing a single build.</td>
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
    <td><a href="#batch_get_builds"><CopyableCode code="batch_get_builds" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about one or more builds.</td>
</tr>
<tr>
    <td><a href="#list_builds_for_project"><CopyableCode code="list_builds_for_project" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.</td>
</tr>
<tr>
    <td><a href="#list_builds"><CopyableCode code="list_builds" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of build IDs, with each build ID representing a single build.</td>
</tr>
<tr>
    <td><a href="#batch_delete_builds"><CopyableCode code="batch_delete_builds" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ids"><code>ids</code></a></td>
    <td></td>
    <td>Deletes one or more builds.</td>
</tr>
<tr>
    <td><a href="#retry_build"><CopyableCode code="retry_build" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Restarts a build.</td>
</tr>
<tr>
    <td><a href="#start_build"><CopyableCode code="start_build" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectName"><code>projectName</code></a></td>
    <td></td>
    <td>Starts running a build with the settings defined in the project. These setting include: how to run a build, where to get the source code, which build environment to use, which build commands to run, and where to store the build output. You can also start a build run by overriding some of the build settings in the project. The overrides only apply for that specific start build request. The settings in the project are unaltered.</td>
</tr>
<tr>
    <td><a href="#start_build_batch"><CopyableCode code="start_build_batch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectName"><code>projectName</code></a></td>
    <td></td>
    <td>Starts a batch build for a project.</td>
</tr>
<tr>
    <td><a href="#stop_build"><CopyableCode code="stop_build" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Attempts to stop running a build.</td>
</tr>
<tr>
    <td><a href="#stop_build_batch"><CopyableCode code="stop_build_batch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Stops a running batch build.</td>
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
    defaultValue="batch_get_builds"
    values={[
        { label: 'batch_get_builds', value: 'batch_get_builds' },
        { label: 'list_builds_for_project', value: 'list_builds_for_project' },
        { label: 'list_builds', value: 'list_builds' }
    ]}
>
<TabItem value="batch_get_builds">

Gets information about one or more builds.

```sql
SELECT
builds,
builds_not_found
FROM aws.codebuild.builds
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_builds_for_project">

Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.

```sql
SELECT
id
FROM aws.codebuild.builds
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_builds">

Gets a list of build IDs, with each build ID representing a single build.

```sql
SELECT
id
FROM aws.codebuild.builds
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_builds"
    values={[
        { label: 'batch_delete_builds', value: 'batch_delete_builds' },
        { label: 'retry_build', value: 'retry_build' },
        { label: 'start_build', value: 'start_build' },
        { label: 'start_build_batch', value: 'start_build_batch' },
        { label: 'stop_build', value: 'stop_build' },
        { label: 'stop_build_batch', value: 'stop_build_batch' }
    ]}
>
<TabItem value="batch_delete_builds">

Deletes one or more builds.

```sql
EXEC aws.codebuild.builds.batch_delete_builds 
@region='{{ region }}' --required 
@@json=
'{
"ids": "{{ ids }}"
}'
;
```
</TabItem>
<TabItem value="retry_build">

Restarts a build.

```sql
EXEC aws.codebuild.builds.retry_build 
@region='{{ region }}' --required 
@@json=
'{
"id": "{{ id }}", 
"idempotencyToken": "{{ idempotencyToken }}"
}'
;
```
</TabItem>
<TabItem value="start_build">

Starts running a build with the settings defined in the project. These setting include: how to run a build, where to get the source code, which build environment to use, which build commands to run, and where to store the build output. You can also start a build run by overriding some of the build settings in the project. The overrides only apply for that specific start build request. The settings in the project are unaltered.

```sql
EXEC aws.codebuild.builds.start_build 
@region='{{ region }}' --required 
@@json=
'{
"projectName": "{{ projectName }}", 
"secondarySourcesOverride": "{{ secondarySourcesOverride }}", 
"secondarySourcesVersionOverride": "{{ secondarySourcesVersionOverride }}", 
"sourceVersion": "{{ sourceVersion }}", 
"artifactsOverride": "{{ artifactsOverride }}", 
"secondaryArtifactsOverride": "{{ secondaryArtifactsOverride }}", 
"environmentVariablesOverride": "{{ environmentVariablesOverride }}", 
"sourceTypeOverride": "{{ sourceTypeOverride }}", 
"sourceLocationOverride": "{{ sourceLocationOverride }}", 
"sourceAuthOverride": "{{ sourceAuthOverride }}", 
"gitCloneDepthOverride": {{ gitCloneDepthOverride }}, 
"gitSubmodulesConfigOverride": "{{ gitSubmodulesConfigOverride }}", 
"buildspecOverride": "{{ buildspecOverride }}", 
"insecureSslOverride": {{ insecureSslOverride }}, 
"reportBuildStatusOverride": {{ reportBuildStatusOverride }}, 
"buildStatusConfigOverride": "{{ buildStatusConfigOverride }}", 
"environmentTypeOverride": "{{ environmentTypeOverride }}", 
"imageOverride": "{{ imageOverride }}", 
"computeTypeOverride": "{{ computeTypeOverride }}", 
"certificateOverride": "{{ certificateOverride }}", 
"cacheOverride": "{{ cacheOverride }}", 
"serviceRoleOverride": "{{ serviceRoleOverride }}", 
"privilegedModeOverride": {{ privilegedModeOverride }}, 
"timeoutInMinutesOverride": {{ timeoutInMinutesOverride }}, 
"queuedTimeoutInMinutesOverride": {{ queuedTimeoutInMinutesOverride }}, 
"encryptionKeyOverride": "{{ encryptionKeyOverride }}", 
"idempotencyToken": "{{ idempotencyToken }}", 
"logsConfigOverride": "{{ logsConfigOverride }}", 
"registryCredentialOverride": "{{ registryCredentialOverride }}", 
"imagePullCredentialsTypeOverride": "{{ imagePullCredentialsTypeOverride }}", 
"debugSessionEnabled": {{ debugSessionEnabled }}, 
"fleetOverride": "{{ fleetOverride }}", 
"autoRetryLimitOverride": {{ autoRetryLimitOverride }}, 
"hostKernelOverride": "{{ hostKernelOverride }}"
}'
;
```
</TabItem>
<TabItem value="start_build_batch">

Starts a batch build for a project.

```sql
EXEC aws.codebuild.builds.start_build_batch 
@region='{{ region }}' --required 
@@json=
'{
"projectName": "{{ projectName }}", 
"secondarySourcesOverride": "{{ secondarySourcesOverride }}", 
"secondarySourcesVersionOverride": "{{ secondarySourcesVersionOverride }}", 
"sourceVersion": "{{ sourceVersion }}", 
"artifactsOverride": "{{ artifactsOverride }}", 
"secondaryArtifactsOverride": "{{ secondaryArtifactsOverride }}", 
"environmentVariablesOverride": "{{ environmentVariablesOverride }}", 
"sourceTypeOverride": "{{ sourceTypeOverride }}", 
"sourceLocationOverride": "{{ sourceLocationOverride }}", 
"sourceAuthOverride": "{{ sourceAuthOverride }}", 
"gitCloneDepthOverride": {{ gitCloneDepthOverride }}, 
"gitSubmodulesConfigOverride": "{{ gitSubmodulesConfigOverride }}", 
"buildspecOverride": "{{ buildspecOverride }}", 
"insecureSslOverride": {{ insecureSslOverride }}, 
"reportBuildBatchStatusOverride": {{ reportBuildBatchStatusOverride }}, 
"environmentTypeOverride": "{{ environmentTypeOverride }}", 
"imageOverride": "{{ imageOverride }}", 
"computeTypeOverride": "{{ computeTypeOverride }}", 
"certificateOverride": "{{ certificateOverride }}", 
"cacheOverride": "{{ cacheOverride }}", 
"serviceRoleOverride": "{{ serviceRoleOverride }}", 
"privilegedModeOverride": {{ privilegedModeOverride }}, 
"buildTimeoutInMinutesOverride": {{ buildTimeoutInMinutesOverride }}, 
"queuedTimeoutInMinutesOverride": {{ queuedTimeoutInMinutesOverride }}, 
"encryptionKeyOverride": "{{ encryptionKeyOverride }}", 
"idempotencyToken": "{{ idempotencyToken }}", 
"logsConfigOverride": "{{ logsConfigOverride }}", 
"registryCredentialOverride": "{{ registryCredentialOverride }}", 
"imagePullCredentialsTypeOverride": "{{ imagePullCredentialsTypeOverride }}", 
"buildBatchConfigOverride": "{{ buildBatchConfigOverride }}", 
"debugSessionEnabled": {{ debugSessionEnabled }}
}'
;
```
</TabItem>
<TabItem value="stop_build">

Attempts to stop running a build.

```sql
EXEC aws.codebuild.builds.stop_build 
@region='{{ region }}' --required 
@@json=
'{
"id": "{{ id }}"
}'
;
```
</TabItem>
<TabItem value="stop_build_batch">

Stops a running batch build.

```sql
EXEC aws.codebuild.builds.stop_build_batch 
@region='{{ region }}' --required 
@@json=
'{
"id": "{{ id }}"
}'
;
```
</TabItem>
</Tabs>
