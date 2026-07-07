--- 
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
  - codecommit
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.repositories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_repositories"
    values={[
        { label: 'batch_get_repositories', value: 'batch_get_repositories' },
        { label: 'get_repository', value: 'get_repository' },
        { label: 'list_repositories', value: 'list_repositories' }
    ]}
>
<TabItem value="batch_get_repositories">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Returns information about any errors returned when attempting to retrieve information about the repositories.</td>
</tr>
<tr>
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td>A list of repositories returned by the batch get repositories operation.</td>
</tr>
<tr>
    <td><CopyableCode code="repositoriesNotFound" /></td>
    <td><code>array</code></td>
    <td>Returns a list of repository names for which information could not be found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_repository">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account associated with the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="cloneUrlHttp" /></td>
    <td><code>string</code></td>
    <td>The URL to use for cloning the repository over HTTPS.</td>
</tr>
<tr>
    <td><CopyableCode code="cloneUrlSsh" /></td>
    <td><code>string</code></td>
    <td>The URL to use for cloning the repository over SSH.</td>
</tr>
<tr>
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the repository was created, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultBranch" /></td>
    <td><code>string</code></td>
    <td>The repository's default branch name.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Key Management Service encryption key used to encrypt and decrypt the repository. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:/_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the repository was last modified, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryDescription" /></td>
    <td><code>string</code></td>
    <td>A comment or description about the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryId" /></td>
    <td><code>string</code></td>
    <td>The ID of the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryName" /></td>
    <td><code>string</code></td>
    <td>The repository's name. (pattern: &lt;code&gt;&#91;\w\.-&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_repositories">

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
    <td><CopyableCode code="repositoryId" /></td>
    <td><code>string</code></td>
    <td>The ID associated with the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryName" /></td>
    <td><code>string</code></td>
    <td>The name associated with the repository. (pattern: &lt;code&gt;&#91;\w\.-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#batch_get_repositories"><CopyableCode code="batch_get_repositories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about one or more repositories. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</td>
</tr>
<tr>
    <td><a href="#get_repository"><CopyableCode code="get_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a repository. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</td>
</tr>
<tr>
    <td><a href="#list_repositories"><CopyableCode code="list_repositories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about one or more repositories.</td>
</tr>
<tr>
    <td><a href="#create_repository"><CopyableCode code="create_repository" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a></td>
    <td></td>
    <td>Creates a new, empty repository.</td>
</tr>
<tr>
    <td><a href="#associate_approval_rule_template_with_repository"><CopyableCode code="associate_approval_rule_template_with_repository" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-approvalRuleTemplateName"><code>approvalRuleTemplateName</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a></td>
    <td></td>
    <td>Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.</td>
</tr>
<tr>
    <td><a href="#update_repository_encryption_key"><CopyableCode code="update_repository_encryption_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-kmsKeyId"><code>kmsKeyId</code></a></td>
    <td></td>
    <td>Updates the Key Management Service encryption key used to encrypt and decrypt a CodeCommit repository.</td>
</tr>
<tr>
    <td><a href="#update_repository_name"><CopyableCode code="update_repository_name" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-oldName"><code>oldName</code></a>, <a href="#parameter-newName"><code>newName</code></a></td>
    <td></td>
    <td>Renames a repository. The repository name must be unique across the calling Amazon Web Services account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see Quotas in the CodeCommit User Guide.</td>
</tr>
<tr>
    <td><a href="#update_repository_description"><CopyableCode code="update_repository_description" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a></td>
    <td></td>
    <td>Sets or changes the comment or description for a repository. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</td>
</tr>
<tr>
    <td><a href="#delete_repository"><CopyableCode code="delete_repository" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned. Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</td>
</tr>
<tr>
    <td><a href="#batch_associate_approval_rule_template_with_repositories"><CopyableCode code="batch_associate_approval_rule_template_with_repositories" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-approvalRuleTemplateName"><code>approvalRuleTemplateName</code></a>, <a href="#parameter-repositoryNames"><code>repositoryNames</code></a></td>
    <td></td>
    <td>Creates an association between an approval rule template and one or more specified repositories.</td>
</tr>
<tr>
    <td><a href="#batch_disassociate_approval_rule_template_from_repositories"><CopyableCode code="batch_disassociate_approval_rule_template_from_repositories" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-approvalRuleTemplateName"><code>approvalRuleTemplateName</code></a>, <a href="#parameter-repositoryNames"><code>repositoryNames</code></a></td>
    <td></td>
    <td>Removes the association between an approval rule template and one or more specified repositories.</td>
</tr>
<tr>
    <td><a href="#disassociate_approval_rule_template_from_repository"><CopyableCode code="disassociate_approval_rule_template_from_repository" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-approvalRuleTemplateName"><code>approvalRuleTemplateName</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a></td>
    <td></td>
    <td>Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.</td>
</tr>
<tr>
    <td><a href="#merge_branches_by_fast_forward"><CopyableCode code="merge_branches_by_fast_forward" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-sourceCommitSpecifier"><code>sourceCommitSpecifier</code></a>, <a href="#parameter-destinationCommitSpecifier"><code>destinationCommitSpecifier</code></a></td>
    <td></td>
    <td>Merges two branches using the fast-forward merge strategy.</td>
</tr>
<tr>
    <td><a href="#merge_branches_by_squash"><CopyableCode code="merge_branches_by_squash" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-sourceCommitSpecifier"><code>sourceCommitSpecifier</code></a>, <a href="#parameter-destinationCommitSpecifier"><code>destinationCommitSpecifier</code></a></td>
    <td></td>
    <td>Merges two branches using the squash merge strategy.</td>
</tr>
<tr>
    <td><a href="#merge_branches_by_three_way"><CopyableCode code="merge_branches_by_three_way" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-sourceCommitSpecifier"><code>sourceCommitSpecifier</code></a>, <a href="#parameter-destinationCommitSpecifier"><code>destinationCommitSpecifier</code></a></td>
    <td></td>
    <td>Merges two specified branches using the three-way merge strategy.</td>
</tr>
<tr>
    <td><a href="#post_comment_for_compared_commit"><CopyableCode code="post_comment_for_compared_commit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-afterCommitId"><code>afterCommitId</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Posts a comment on the comparison between two commits.</td>
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
    defaultValue="batch_get_repositories"
    values={[
        { label: 'batch_get_repositories', value: 'batch_get_repositories' },
        { label: 'get_repository', value: 'get_repository' },
        { label: 'list_repositories', value: 'list_repositories' }
    ]}
>
<TabItem value="batch_get_repositories">

Returns information about one or more repositories. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.

```sql
SELECT
errors,
repositories,
repositoriesNotFound
FROM aws.codecommit.repositories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_repository">

Returns information about a repository. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.

```sql
SELECT
Arn,
accountId,
cloneUrlHttp,
cloneUrlSsh,
creationDate,
defaultBranch,
kmsKeyId,
lastModifiedDate,
repositoryDescription,
repositoryId,
repositoryName
FROM aws.codecommit.repositories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_repositories">

Gets information about one or more repositories.

```sql
SELECT
repositoryId,
repositoryName
FROM aws.codecommit.repositories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_repository"
    values={[
        { label: 'create_repository', value: 'create_repository' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_repository">

Creates a new, empty repository.

```sql
INSERT INTO aws.codecommit.repositories (
repositoryName,
repositoryDescription,
tags,
kmsKeyId,
region
)
SELECT 
'{{ repositoryName }}' /* required */,
'{{ repositoryDescription }}',
'{{ tags }}',
'{{ kmsKeyId }}',
'{{ region }}'
RETURNING
repositoryMetadata
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repositories
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the repositories resource.
    - name: repositoryName
      value: "{{ repositoryName }}"
      description: |
        The name of the new repository to be created. The repository name must be unique across the calling Amazon Web Services account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. For more information about the limits on repository names, see Quotas in the CodeCommit User Guide. The suffix .git is prohibited.
    - name: repositoryDescription
      value: "{{ repositoryDescription }}"
      description: |
        A comment or description about the new repository. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.
    - name: tags
      value: "{{ tags }}"
      description: |
        One or more tag key-value pairs to use when tagging this repository.
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The ID of the encryption key. You can view the ID of an encryption key in the KMS console, or use the KMS APIs to programmatically retrieve a key ID. For more information about acceptable values for kmsKeyID, see KeyId in the Decrypt API description in the Key Management Service API Reference. If no key is specified, the default aws/codecommit Amazon Web Services managed key is used.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_approval_rule_template_with_repository"
    values={[
        { label: 'associate_approval_rule_template_with_repository', value: 'associate_approval_rule_template_with_repository' },
        { label: 'update_repository_encryption_key', value: 'update_repository_encryption_key' },
        { label: 'update_repository_name', value: 'update_repository_name' },
        { label: 'update_repository_description', value: 'update_repository_description' }
    ]}
>
<TabItem value="associate_approval_rule_template_with_repository">

Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.

```sql
UPDATE aws.codecommit.repositories
SET 
approvalRuleTemplateName = '{{ approvalRuleTemplateName }}',
repositoryName = '{{ repositoryName }}'
WHERE 
region = '{{ region }}' --required
AND approvalRuleTemplateName = '{{ approvalRuleTemplateName }}' --required
AND repositoryName = '{{ repositoryName }}' --required;
```
</TabItem>
<TabItem value="update_repository_encryption_key">

Updates the Key Management Service encryption key used to encrypt and decrypt a CodeCommit repository.

```sql
UPDATE aws.codecommit.repositories
SET 
repositoryName = '{{ repositoryName }}',
kmsKeyId = '{{ kmsKeyId }}'
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND kmsKeyId = '{{ kmsKeyId }}' --required
RETURNING
kmsKeyId,
originalKmsKeyId,
repositoryId;
```
</TabItem>
<TabItem value="update_repository_name">

Renames a repository. The repository name must be unique across the calling Amazon Web Services account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see Quotas in the CodeCommit User Guide.

```sql
UPDATE aws.codecommit.repositories
SET 
oldName = '{{ oldName }}',
newName = '{{ newName }}'
WHERE 
region = '{{ region }}' --required
AND oldName = '{{ oldName }}' --required
AND newName = '{{ newName }}' --required;
```
</TabItem>
<TabItem value="update_repository_description">

Sets or changes the comment or description for a repository. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.

```sql
UPDATE aws.codecommit.repositories
SET 
repositoryName = '{{ repositoryName }}',
repositoryDescription = '{{ repositoryDescription }}'
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_repository"
    values={[
        { label: 'delete_repository', value: 'delete_repository' }
    ]}
>
<TabItem value="delete_repository">

Deletes a repository. If a specified repository was already deleted, a null repository ID is returned. Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.

```sql
DELETE FROM aws.codecommit.repositories
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_associate_approval_rule_template_with_repositories"
    values={[
        { label: 'batch_associate_approval_rule_template_with_repositories', value: 'batch_associate_approval_rule_template_with_repositories' },
        { label: 'batch_disassociate_approval_rule_template_from_repositories', value: 'batch_disassociate_approval_rule_template_from_repositories' },
        { label: 'disassociate_approval_rule_template_from_repository', value: 'disassociate_approval_rule_template_from_repository' },
        { label: 'merge_branches_by_fast_forward', value: 'merge_branches_by_fast_forward' },
        { label: 'merge_branches_by_squash', value: 'merge_branches_by_squash' },
        { label: 'merge_branches_by_three_way', value: 'merge_branches_by_three_way' },
        { label: 'post_comment_for_compared_commit', value: 'post_comment_for_compared_commit' }
    ]}
>
<TabItem value="batch_associate_approval_rule_template_with_repositories">

Creates an association between an approval rule template and one or more specified repositories.

```sql
EXEC aws.codecommit.repositories.batch_associate_approval_rule_template_with_repositories 
@region='{{ region }}' --required 
@@json=
'{
"approvalRuleTemplateName": "{{ approvalRuleTemplateName }}", 
"repositoryNames": "{{ repositoryNames }}"
}'
;
```
</TabItem>
<TabItem value="batch_disassociate_approval_rule_template_from_repositories">

Removes the association between an approval rule template and one or more specified repositories.

```sql
EXEC aws.codecommit.repositories.batch_disassociate_approval_rule_template_from_repositories 
@region='{{ region }}' --required 
@@json=
'{
"approvalRuleTemplateName": "{{ approvalRuleTemplateName }}", 
"repositoryNames": "{{ repositoryNames }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_approval_rule_template_from_repository">

Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.

```sql
EXEC aws.codecommit.repositories.disassociate_approval_rule_template_from_repository 
@region='{{ region }}' --required 
@@json=
'{
"approvalRuleTemplateName": "{{ approvalRuleTemplateName }}", 
"repositoryName": "{{ repositoryName }}"
}'
;
```
</TabItem>
<TabItem value="merge_branches_by_fast_forward">

Merges two branches using the fast-forward merge strategy.

```sql
EXEC aws.codecommit.repositories.merge_branches_by_fast_forward 
@region='{{ region }}' --required 
@@json=
'{
"repositoryName": "{{ repositoryName }}", 
"sourceCommitSpecifier": "{{ sourceCommitSpecifier }}", 
"destinationCommitSpecifier": "{{ destinationCommitSpecifier }}", 
"targetBranch": "{{ targetBranch }}"
}'
;
```
</TabItem>
<TabItem value="merge_branches_by_squash">

Merges two branches using the squash merge strategy.

```sql
EXEC aws.codecommit.repositories.merge_branches_by_squash 
@region='{{ region }}' --required 
@@json=
'{
"repositoryName": "{{ repositoryName }}", 
"sourceCommitSpecifier": "{{ sourceCommitSpecifier }}", 
"destinationCommitSpecifier": "{{ destinationCommitSpecifier }}", 
"targetBranch": "{{ targetBranch }}", 
"conflictDetailLevel": "{{ conflictDetailLevel }}", 
"conflictResolutionStrategy": "{{ conflictResolutionStrategy }}", 
"authorName": "{{ authorName }}", 
"email": "{{ email }}", 
"commitMessage": "{{ commitMessage }}", 
"keepEmptyFolders": {{ keepEmptyFolders }}, 
"conflictResolution": "{{ conflictResolution }}"
}'
;
```
</TabItem>
<TabItem value="merge_branches_by_three_way">

Merges two specified branches using the three-way merge strategy.

```sql
EXEC aws.codecommit.repositories.merge_branches_by_three_way 
@region='{{ region }}' --required 
@@json=
'{
"repositoryName": "{{ repositoryName }}", 
"sourceCommitSpecifier": "{{ sourceCommitSpecifier }}", 
"destinationCommitSpecifier": "{{ destinationCommitSpecifier }}", 
"targetBranch": "{{ targetBranch }}", 
"conflictDetailLevel": "{{ conflictDetailLevel }}", 
"conflictResolutionStrategy": "{{ conflictResolutionStrategy }}", 
"authorName": "{{ authorName }}", 
"email": "{{ email }}", 
"commitMessage": "{{ commitMessage }}", 
"keepEmptyFolders": {{ keepEmptyFolders }}, 
"conflictResolution": "{{ conflictResolution }}"
}'
;
```
</TabItem>
<TabItem value="post_comment_for_compared_commit">

Posts a comment on the comparison between two commits.

```sql
EXEC aws.codecommit.repositories.post_comment_for_compared_commit 
@region='{{ region }}' --required 
@@json=
'{
"repositoryName": "{{ repositoryName }}", 
"beforeCommitId": "{{ beforeCommitId }}", 
"afterCommitId": "{{ afterCommitId }}", 
"location": "{{ location }}", 
"content": "{{ content }}", 
"clientRequestToken": "{{ clientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
