--- 
title: artifacts
hide_title: false
hide_table_of_contents: false
keywords:
  - artifacts
  - sagemaker
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

Creates, updates, deletes, gets or lists an <code>artifacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="artifacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.artifacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_artifact"
    values={[
        { label: 'describe_artifact', value: 'describe_artifact' },
        { label: 'list_artifacts', value: 'list_artifacts' }
    ]}
>
<TabItem value="describe_artifact">

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
    <td><CopyableCode code="artifact_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the artifact. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:artifact/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="artifact_name" /></td>
    <td><code>string</code></td>
    <td>The name of the artifact. (pattern: &lt;code&gt;(arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:(experiment|experiment-trial|experiment-trial-component|artifact|action|context)\/)?(&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="artifact_type" /></td>
    <td><code>string</code></td>
    <td>The type of the artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the artifact was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the artifact was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="lineage_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lineage group. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:lineage-group/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_properties" /></td>
    <td><code>object</code></td>
    <td>Metadata properties of the tracking entity, trial, or trial component.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>A list of the artifact's properties.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The source of the artifact.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_artifacts">

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
    <td><CopyableCode code="artifact_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the artifact. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:artifact/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="artifact_name" /></td>
    <td><code>string</code></td>
    <td>The name of the artifact. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="artifact_type" /></td>
    <td><code>string</code></td>
    <td>The type of the artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the artifact was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the artifact was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The source of the artifact.</td>
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
    <td><a href="#describe_artifact"><CopyableCode code="describe_artifact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an artifact.</td>
</tr>
<tr>
    <td><a href="#list_artifacts"><CopyableCode code="list_artifacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the artifacts in your account and their properties.</td>
</tr>
<tr>
    <td><a href="#create_artifact"><CopyableCode code="create_artifact" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ArtifactType"><code>ArtifactType</code></a></td>
    <td></td>
    <td>Creates an artifact. An artifact is a lineage tracking entity that represents a URI addressable object or data. Some examples are the S3 URI of a dataset and the ECR registry path of an image. For more information, see Amazon SageMaker ML Lineage Tracking.</td>
</tr>
<tr>
    <td><a href="#update_artifact"><CopyableCode code="update_artifact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ArtifactArn"><code>ArtifactArn</code></a></td>
    <td></td>
    <td>Updates an artifact.</td>
</tr>
<tr>
    <td><a href="#delete_artifact"><CopyableCode code="delete_artifact" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an artifact. Either ArtifactArn or Source must be specified.</td>
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
    defaultValue="describe_artifact"
    values={[
        { label: 'describe_artifact', value: 'describe_artifact' },
        { label: 'list_artifacts', value: 'list_artifacts' }
    ]}
>
<TabItem value="describe_artifact">

Describes an artifact.

```sql
SELECT
artifact_arn,
artifact_name,
artifact_type,
created_by,
creation_time,
last_modified_by,
last_modified_time,
lineage_group_arn,
metadata_properties,
properties,
source
FROM aws.sagemaker.artifacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_artifacts">

Lists the artifacts in your account and their properties.

```sql
SELECT
artifact_arn,
artifact_name,
artifact_type,
creation_time,
last_modified_time,
source
FROM aws.sagemaker.artifacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_artifact"
    values={[
        { label: 'create_artifact', value: 'create_artifact' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_artifact">

Creates an artifact. An artifact is a lineage tracking entity that represents a URI addressable object or data. Some examples are the S3 URI of a dataset and the ECR registry path of an image. For more information, see Amazon SageMaker ML Lineage Tracking.

```sql
INSERT INTO aws.sagemaker.artifacts (
ArtifactName,
Source,
ArtifactType,
Properties,
MetadataProperties,
Tags,
region
)
SELECT 
'{{ ArtifactName }}',
'{{ Source }}',
'{{ ArtifactType }}' /* required */,
'{{ Properties }}',
'{{ MetadataProperties }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
artifact_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: artifacts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the artifacts resource.
    - name: ArtifactName
      value: "{{ ArtifactName }}"
      description: |
        The name of the artifact. Must be unique to your account in an Amazon Web Services Region.
    - name: Source
      description: |
        The ID, ID type, and URI of the source.
      value:
        SourceUri: "{{ SourceUri }}"
        SourceTypes:
          - SourceIdType: "{{ SourceIdType }}"
            Value: "{{ Value }}"
    - name: ArtifactType
      value: "{{ ArtifactType }}"
      description: |
        The artifact type.
    - name: Properties
      value: "{{ Properties }}"
      description: |
        A list of properties to add to the artifact.
    - name: MetadataProperties
      description: |
        Metadata properties of the tracking entity, trial, or trial component.
      value:
        CommitId: "{{ CommitId }}"
        Repository: "{{ Repository }}"
        GeneratedBy: "{{ GeneratedBy }}"
        ProjectId: "{{ ProjectId }}"
    - name: Tags
      description: |
        A list of tags to apply to the artifact.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_artifact"
    values={[
        { label: 'update_artifact', value: 'update_artifact' }
    ]}
>
<TabItem value="update_artifact">

Updates an artifact.

```sql
UPDATE aws.sagemaker.artifacts
SET 
ArtifactArn = '{{ ArtifactArn }}',
ArtifactName = '{{ ArtifactName }}',
Properties = '{{ Properties }}',
PropertiesToRemove = '{{ PropertiesToRemove }}'
WHERE 
region = '{{ region }}' --required
AND ArtifactArn = '{{ ArtifactArn }}' --required
RETURNING
artifact_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_artifact"
    values={[
        { label: 'delete_artifact', value: 'delete_artifact' }
    ]}
>
<TabItem value="delete_artifact">

Deletes an artifact. Either ArtifactArn or Source must be specified.

```sql
DELETE FROM aws.sagemaker.artifacts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
