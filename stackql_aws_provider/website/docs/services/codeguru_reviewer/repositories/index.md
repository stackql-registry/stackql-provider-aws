--- 
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
  - codeguru_reviewer
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

Creates, updates, deletes, gets or lists a <code>repositories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repositories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguru_reviewer.repositories" /></td></tr>
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
    <td><a href="#associate_repository"><CopyableCode code="associate_repository" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Repository"><code>Repository</code></a></td>
    <td></td>
    <td>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see Recommendations in Amazon CodeGuru Reviewer in the Amazon CodeGuru Reviewer User Guide. If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured. Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see Associate a repository in the Amazon CodeGuru Reviewer User Guide. You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see Getting started with CodeGuru Reviewer in the CodeGuru Reviewer User Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_repository"><CopyableCode code="disassociate_repository" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-association_arn"><code>association_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the association between Amazon CodeGuru Reviewer and a repository.</td>
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
<tr id="parameter-association_arn">
    <td><CopyableCode code="association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the RepositoryAssociation object. You can retrieve this ARN by calling ListRepositoryAssociations.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="associate_repository"
    values={[
        { label: 'associate_repository', value: 'associate_repository' },
        { label: 'disassociate_repository', value: 'disassociate_repository' }
    ]}
>
<TabItem value="associate_repository">

Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see Recommendations in Amazon CodeGuru Reviewer in the Amazon CodeGuru Reviewer User Guide. If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured. Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see Associate a repository in the Amazon CodeGuru Reviewer User Guide. You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see Getting started with CodeGuru Reviewer in the CodeGuru Reviewer User Guide.

```sql
UPDATE aws.codeguru_reviewer.repositories
SET 
Repository = '{{ Repository }}',
ClientRequestToken = '{{ ClientRequestToken }}',
Tags = '{{ Tags }}',
KMSKeyDetails = '{{ KMSKeyDetails }}'
WHERE 
region = '{{ region }}' --required
AND Repository = '{{ Repository }}' --required
RETURNING
repository_association,
tags;
```
</TabItem>
<TabItem value="disassociate_repository">

Removes the association between Amazon CodeGuru Reviewer and a repository.

```sql
UPDATE aws.codeguru_reviewer.repositories
SET 
-- No updatable properties
WHERE 
association_arn = '{{ association_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
repository_association,
tags;
```
</TabItem>
</Tabs>
