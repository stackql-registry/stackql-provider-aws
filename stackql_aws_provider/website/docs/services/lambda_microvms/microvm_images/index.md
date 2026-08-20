--- 
title: microvm_images
hide_title: false
hide_table_of_contents: false
keywords:
  - microvm_images
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

Creates, updates, deletes, gets or lists a <code>microvm_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="microvm_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda_microvms.microvm_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_microvm_image"
    values={[
        { label: 'get_microvm_image', value: 'get_microvm_image' },
        { label: 'list_microvm_images', value: 'list_microvm_images' }
    ]}
>
<TabItem value="get_microvm_image">

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
    <td>Name of a MicroVM image. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the MicroVM image was created.</td>
</tr>
<tr>
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_active_image_version" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_failed_image_version" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the MicroVM image. (CREATING, CREATED, CREATE_FAILED, UPDATING, UPDATED, UPDATE_FAILED, DELETING, DELETE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A set of key-value pairs that you can attach to the resource. Use tags to categorize resources for cost allocation, access control (ABAC), and organization.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the MicroVM image was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_microvm_images">

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
    <td>Name of a MicroVM image. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the MicroVM image was created.</td>
</tr>
<tr>
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_active_image_version" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_failed_image_version" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the MicroVM image. (CREATING, CREATED, CREATE_FAILED, UPDATING, UPDATED, UPDATE_FAILED, DELETING, DELETE_FAILED, DELETED)</td>
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
    <td><a href="#get_microvm_image"><CopyableCode code="get_microvm_image" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-image_identifier"><code>image_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a MicroVM image, including its state, versions, and configuration.</td>
</tr>
<tr>
    <td><a href="#list_microvm_images"><CopyableCode code="list_microvm_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-nameFilter"><code>nameFilter</code></a></td>
    <td>Lists MicroVM images in the account with optional name filtering. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#create_microvm_image"><CopyableCode code="create_microvm_image" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-baseImageArn"><code>baseImageArn</code></a>, <a href="#parameter-buildRoleArn"><code>buildRoleArn</code></a>, <a href="#parameter-codeArtifact"><code>codeArtifact</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a MicroVM image from the specified code artifact and base image. The build is asynchronous — the image transitions from CREATING to CREATED on success, or CREATE_FAILED on failure. Use GetMicrovmImage to poll for completion.</td>
</tr>
<tr>
    <td><a href="#update_microvm_image"><CopyableCode code="update_microvm_image" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-image_identifier"><code>image_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-baseImageArn"><code>baseImageArn</code></a>, <a href="#parameter-buildRoleArn"><code>buildRoleArn</code></a>, <a href="#parameter-codeArtifact"><code>codeArtifact</code></a></td>
    <td></td>
    <td>Updates the configuration of a MicroVM image and triggers a new version build. This operation uses PUT semantics — all required fields (codeArtifact, baseImageArn, buildRoleArn) must be provided with every request.</td>
</tr>
<tr>
    <td><a href="#delete_microvm_image"><CopyableCode code="delete_microvm_image" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-image_identifier"><code>image_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a MicroVM image. This operation is idempotent; deleting an image that has already been deleted succeeds without error.</td>
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
<tr id="parameter-image_identifier">
    <td><CopyableCode code="image_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ARN or ID) of the MicroVM image to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-nameFilter">
    <td><CopyableCode code="nameFilter" /></td>
    <td><code>string</code></td>
    <td>Filters images whose name contains the specified string.</td>
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
    defaultValue="get_microvm_image"
    values={[
        { label: 'get_microvm_image', value: 'get_microvm_image' },
        { label: 'list_microvm_images', value: 'list_microvm_images' }
    ]}
>
<TabItem value="get_microvm_image">

Retrieves the details of a MicroVM image, including its state, versions, and configuration.

```sql
SELECT
name,
created_at,
image_arn,
latest_active_image_version,
latest_failed_image_version,
state,
tags,
updated_at
FROM aws.lambda_microvms.microvm_images
WHERE image_identifier = '{{ image_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_microvm_images">

Lists MicroVM images in the account with optional name filtering. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
name,
created_at,
image_arn,
latest_active_image_version,
latest_failed_image_version,
state
FROM aws.lambda_microvms.microvm_images
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND nameFilter = '{{ nameFilter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_microvm_image"
    values={[
        { label: 'create_microvm_image', value: 'create_microvm_image' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_microvm_image">

Creates a MicroVM image from the specified code artifact and base image. The build is asynchronous — the image transitions from CREATING to CREATED on success, or CREATE_FAILED on failure. Use GetMicrovmImage to poll for completion.

```sql
INSERT INTO aws.lambda_microvms.microvm_images (
baseImageArn,
baseImageVersion,
buildRoleArn,
description,
codeArtifact,
logging,
egressNetworkConnectors,
cpuConfigurations,
resources,
additionalOsCapabilities,
hooks,
environmentVariables,
name,
tags,
clientToken,
region
)
SELECT 
'{{ baseImageArn }}' /* required */,
'{{ baseImageVersion }}',
'{{ buildRoleArn }}' /* required */,
'{{ description }}',
'{{ codeArtifact }}' /* required */,
'{{ logging }}',
'{{ egressNetworkConnectors }}',
'{{ cpuConfigurations }}',
'{{ resources }}',
'{{ additionalOsCapabilities }}',
'{{ hooks }}',
'{{ environmentVariables }}',
'{{ name }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
name,
additional_os_capabilities,
base_image_arn,
base_image_version,
build_role_arn,
code_artifact,
cpu_configurations,
created_at,
description,
egress_network_connectors,
environment_variables,
hooks,
image_arn,
image_version,
latest_active_image_version,
latest_failed_image_version,
logging,
resources,
state,
tags,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: microvm_images
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the microvm_images resource.
    - name: baseImageArn
      value: "{{ baseImageArn }}"
      description: |
        A string which is not empty or blank (only whitespace).
    - name: baseImageVersion
      value: "{{ baseImageVersion }}"
    - name: buildRoleArn
      value: "{{ buildRoleArn }}"
      description: |
        The ARN of an IAM role that the service assumes to perform actions on behalf of the caller.
    - name: description
      value: "{{ description }}"
    - name: codeArtifact
      description: |
        Contains the location of the code artifact for a MicroVM image.
      value:
        uri: "{{ uri }}"
    - name: logging
      description: |
        Configuration for MicroVM logging output. Specify exactly one: cloudWatch to enable CloudWatch logging, or disabled to turn off logging.
      value:
        disabled: "{{ disabled }}"
        cloudWatch:
          logGroup: "{{ logGroup }}"
          logStream: "{{ logStream }}"
    - name: egressNetworkConnectors
      value:
        - "{{ egressNetworkConnectors }}"
    - name: cpuConfigurations
      description: |
        List of CPU architectures
      value:
        - architecture: "{{ architecture }}"
    - name: resources
      description: |
        List of resources
      value:
        - minimumMemoryInMiB: {{ minimumMemoryInMiB }}
    - name: additionalOsCapabilities
      value:
        - "{{ additionalOsCapabilities }}"
      description: |
        List of capabilities granted to the application when booted
    - name: hooks
      description: |
        Lifecycle hook configuration for MicroVMs and MicroVM images.
      value:
        port: {{ port }}
        microvmHooks:
          run: "{{ run }}"
          runTimeoutInSeconds: {{ runTimeoutInSeconds }}
          resume: "{{ resume }}"
          resumeTimeoutInSeconds: {{ resumeTimeoutInSeconds }}
          suspend: "{{ suspend }}"
          suspendTimeoutInSeconds: {{ suspendTimeoutInSeconds }}
          terminate: "{{ terminate }}"
          terminateTimeoutInSeconds: {{ terminateTimeoutInSeconds }}
        microvmImageHooks:
          ready: "{{ ready }}"
          readyTimeoutInSeconds: {{ readyTimeoutInSeconds }}
          validate: "{{ validate }}"
          validateTimeoutInSeconds: {{ validateTimeoutInSeconds }}
    - name: environmentVariables
      value: "{{ environmentVariables }}"
    - name: name
      value: "{{ name }}"
      description: |
        Name of a MicroVM image.
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_microvm_image"
    values={[
        { label: 'update_microvm_image', value: 'update_microvm_image' }
    ]}
>
<TabItem value="update_microvm_image">

Updates the configuration of a MicroVM image and triggers a new version build. This operation uses PUT semantics — all required fields (codeArtifact, baseImageArn, buildRoleArn) must be provided with every request.

```sql
UPDATE aws.lambda_microvms.microvm_images
SET 
baseImageArn = '{{ baseImageArn }}',
baseImageVersion = '{{ baseImageVersion }}',
buildRoleArn = '{{ buildRoleArn }}',
description = '{{ description }}',
codeArtifact = '{{ codeArtifact }}',
logging = '{{ logging }}',
egressNetworkConnectors = '{{ egressNetworkConnectors }}',
cpuConfigurations = '{{ cpuConfigurations }}',
resources = '{{ resources }}',
additionalOsCapabilities = '{{ additionalOsCapabilities }}',
hooks = '{{ hooks }}',
environmentVariables = '{{ environmentVariables }}',
clientToken = '{{ clientToken }}'
WHERE 
image_identifier = '{{ image_identifier }}' --required
AND region = '{{ region }}' --required
AND baseImageArn = '{{ baseImageArn }}' --required
AND buildRoleArn = '{{ buildRoleArn }}' --required
AND codeArtifact = '{{ codeArtifact }}' --required
RETURNING
name,
additional_os_capabilities,
base_image_arn,
base_image_version,
build_role_arn,
code_artifact,
cpu_configurations,
created_at,
description,
egress_network_connectors,
environment_variables,
hooks,
image_arn,
image_version,
latest_active_image_version,
latest_failed_image_version,
logging,
resources,
state,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_microvm_image"
    values={[
        { label: 'delete_microvm_image', value: 'delete_microvm_image' }
    ]}
>
<TabItem value="delete_microvm_image">

Deletes a MicroVM image. This operation is idempotent; deleting an image that has already been deleted succeeds without error.

```sql
DELETE FROM aws.lambda_microvms.microvm_images
WHERE image_identifier = '{{ image_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
