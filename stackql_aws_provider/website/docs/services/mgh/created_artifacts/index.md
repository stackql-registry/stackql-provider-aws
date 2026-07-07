--- 
title: created_artifacts
hide_title: false
hide_table_of_contents: false
keywords:
  - created_artifacts
  - mgh
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

Creates, updates, deletes, gets or lists a <code>created_artifacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="created_artifacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgh.created_artifacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_created_artifacts"
    values={[
        { label: 'list_created_artifacts', value: 'list_created_artifacts' }
    ]}
>
<TabItem value="list_created_artifacts">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description that can be free-form text to record additional detail about the artifact for clarity or for later reference. (pattern: &lt;code&gt;^.&#123;0,500&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies the result of a migration task. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+:&#91;a-z0-9-&#93;+:(?:&#91;a-z0-9-&#93;+|):(?:&#91;0-9&#93;&#123;12&#125;|):.*&lt;/code&gt;)</td>
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
    <td><a href="#list_created_artifacts"><CopyableCode code="list_created_artifacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits: Gets the list of the created artifacts while migration is taking place. Shows the artifacts created by the migration tool that was associated by the AssociateCreatedArtifact API. Lists created artifacts in a paginated interface.</td>
</tr>
<tr>
    <td><a href="#associate_created_artifact"><CopyableCode code="associate_created_artifact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProgressUpdateStream"><code>ProgressUpdateStream</code></a>, <a href="#parameter-MigrationTaskName"><code>MigrationTaskName</code></a>, <a href="#parameter-CreatedArtifact"><code>CreatedArtifact</code></a></td>
    <td></td>
    <td>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits: Migration tools can call the AssociateCreatedArtifact operation to indicate which AWS artifact is associated with a migration task. The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b. Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</td>
</tr>
<tr>
    <td><a href="#disassociate_created_artifact"><CopyableCode code="disassociate_created_artifact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProgressUpdateStream"><code>ProgressUpdateStream</code></a>, <a href="#parameter-MigrationTaskName"><code>MigrationTaskName</code></a>, <a href="#parameter-CreatedArtifactName"><code>CreatedArtifactName</code></a></td>
    <td></td>
    <td>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits: A migration user can call the DisassociateCreatedArtifacts operation to disassociate a created AWS Artifact from a migration task. The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b. Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</td>
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
    defaultValue="list_created_artifacts"
    values={[
        { label: 'list_created_artifacts', value: 'list_created_artifacts' }
    ]}
>
<TabItem value="list_created_artifacts">

Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits: Gets the list of the created artifacts while migration is taking place. Shows the artifacts created by the migration tool that was associated by the AssociateCreatedArtifact API. Lists created artifacts in a paginated interface.

```sql
SELECT
Description,
Name
FROM aws.mgh.created_artifacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_created_artifact"
    values={[
        { label: 'associate_created_artifact', value: 'associate_created_artifact' },
        { label: 'disassociate_created_artifact', value: 'disassociate_created_artifact' }
    ]}
>
<TabItem value="associate_created_artifact">

Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits: Migration tools can call the AssociateCreatedArtifact operation to indicate which AWS artifact is associated with a migration task. The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b. Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.

```sql
UPDATE aws.mgh.created_artifacts
SET 
ProgressUpdateStream = '{{ ProgressUpdateStream }}',
MigrationTaskName = '{{ MigrationTaskName }}',
CreatedArtifact = '{{ CreatedArtifact }}',
DryRun = {{ DryRun }}
WHERE 
region = '{{ region }}' --required
AND ProgressUpdateStream = '{{ ProgressUpdateStream }}' --required
AND MigrationTaskName = '{{ MigrationTaskName }}' --required
AND CreatedArtifact = '{{ CreatedArtifact }}' --required;
```
</TabItem>
<TabItem value="disassociate_created_artifact">

Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits: A migration user can call the DisassociateCreatedArtifacts operation to disassociate a created AWS Artifact from a migration task. The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b. Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.

```sql
UPDATE aws.mgh.created_artifacts
SET 
ProgressUpdateStream = '{{ ProgressUpdateStream }}',
MigrationTaskName = '{{ MigrationTaskName }}',
CreatedArtifactName = '{{ CreatedArtifactName }}',
DryRun = {{ DryRun }}
WHERE 
region = '{{ region }}' --required
AND ProgressUpdateStream = '{{ ProgressUpdateStream }}' --required
AND MigrationTaskName = '{{ MigrationTaskName }}' --required
AND CreatedArtifactName = '{{ CreatedArtifactName }}' --required;
```
</TabItem>
</Tabs>
