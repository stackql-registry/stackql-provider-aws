--- 
title: repository_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_associations
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

Creates, updates, deletes, gets or lists a <code>repository_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguru_reviewer.repository_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_repository_association"
    values={[
        { label: 'describe_repository_association', value: 'describe_repository_association' },
        { label: 'list_repository_associations', value: 'list_repository_associations' }
    ]}
>
<TabItem value="describe_repository_association">

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
    <td><CopyableCode code="repository_association" /></td>
    <td><code>object</code></td>
    <td>Information about the repository association.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts: A tag key (for example, CostCenter, Environment, Project, or Secret). Tag keys are case sensitive. An optional field known as a tag value (for example, 111122223333, Production, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_repository_associations">

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
    <td><CopyableCode code="association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the RepositoryAssociation object. You can retrieve this ARN by calling ListRepositoryAssociations. (pattern: &lt;code&gt;^arn:aws&#91;^:\s&#93;*:codeguru-reviewer:&#91;^:\s&#93;+:&#91;\d&#93;&#123;12&#125;:&#91;a-z-&#93;+:&#91;\w-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The repository association ID.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id. For more information, see Connection in the Amazon Web Services CodeStar Connections API Reference. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:.+:.+:&#91;0-9&#93;&#123;12&#125;:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time_stamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in milliseconds since the epoch, since the repository association was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository association. (pattern: &lt;code&gt;^\S&#91;\w.-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, it can be the username or Amazon Web Services account ID. (pattern: &lt;code&gt;^\S(.*\S)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_type" /></td>
    <td><code>string</code></td>
    <td>The provider type of the repository association. (CodeCommit, GitHub, Bitbucket, GitHubEnterpriseServer, S3Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the repository association. The valid repository association states are: Associated: The repository association is complete. Associating: CodeGuru Reviewer is: Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review. If your repository ProviderType is GitHub, GitHub Enterprise Server, or Bitbucket, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered. Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository. Failed: The repository failed to associate or disassociate. Disassociating: CodeGuru Reviewer is removing the repository's pull request notifications and source code access. Disassociated: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see Using tags to control access to associated repositories in the Amazon CodeGuru Reviewer User Guide. (Associated, Associating, Failed, Disassociating, Disassociated)</td>
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
    <td><a href="#describe_repository_association"><CopyableCode code="describe_repository_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-association_arn"><code>association_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a RepositoryAssociation object that contains information about the requested repository association.</td>
</tr>
<tr>
    <td><a href="#list_repository_associations"><CopyableCode code="list_repository_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ProviderType"><code>ProviderType</code></a>, <a href="#parameter-State"><code>State</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Owner"><code>Owner</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of RepositoryAssociationSummary objects that contain summary information about a repository association. You can filter the returned list by ProviderType, Name, State, and Owner.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of repository association results returned by ListRepositoryAssociations in paginated output. When this parameter is used, ListRepositoryAssociations only returns maxResults results in a single page with a nextToken response element. The remaining results of the initial request can be seen by sending another ListRepositoryAssociations request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, ListRepositoryAssociations returns up to 100 results and a nextToken value if applicable.</td>
</tr>
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>array</code></td>
    <td>List of repository names to use as a filter.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListRepositoryAssociations request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. Treat this token as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
<tr id="parameter-Owner">
    <td><CopyableCode code="Owner" /></td>
    <td><code>array</code></td>
    <td>List of owners to use as a filter. For Amazon Web Services CodeCommit, it is the name of the CodeCommit account that was used to associate the repository. For other repository source providers, such as Bitbucket and GitHub Enterprise Server, this is name of the account that was used to associate the repository.</td>
</tr>
<tr id="parameter-ProviderType">
    <td><CopyableCode code="ProviderType" /></td>
    <td><code>array</code></td>
    <td>List of provider types to use as a filter.</td>
</tr>
<tr id="parameter-State">
    <td><CopyableCode code="State" /></td>
    <td><code>array</code></td>
    <td>List of repository association states to use as a filter. The valid repository association states are: Associated: The repository association is complete. Associating: CodeGuru Reviewer is: Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review. If your repository ProviderType is GitHub, GitHub Enterprise Server, or Bitbucket, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered. Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository. Failed: The repository failed to associate or disassociate. Disassociating: CodeGuru Reviewer is removing the repository's pull request notifications and source code access. Disassociated: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see Using tags to control access to associated repositories in the Amazon CodeGuru Reviewer User Guide.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_repository_association"
    values={[
        { label: 'describe_repository_association', value: 'describe_repository_association' },
        { label: 'list_repository_associations', value: 'list_repository_associations' }
    ]}
>
<TabItem value="describe_repository_association">

Returns a RepositoryAssociation object that contains information about the requested repository association.

```sql
SELECT
repository_association,
tags
FROM aws.codeguru_reviewer.repository_associations
WHERE association_arn = '{{ association_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_repository_associations">

Returns a list of RepositoryAssociationSummary objects that contain summary information about a repository association. You can filter the returned list by ProviderType, Name, State, and Owner.

```sql
SELECT
association_arn,
association_id,
connection_arn,
last_updated_time_stamp,
name,
owner,
provider_type,
state
FROM aws.codeguru_reviewer.repository_associations
WHERE region = '{{ region }}' -- required
AND ProviderType = '{{ ProviderType }}'
AND State = '{{ State }}'
AND Name = '{{ Name }}'
AND Owner = '{{ Owner }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
