--- 
title: code_reviews
hide_title: false
hide_table_of_contents: false
keywords:
  - code_reviews
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

Creates, updates, deletes, gets or lists a <code>code_reviews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_reviews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguru_reviewer.code_reviews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_code_reviews"
    values={[
        { label: 'list_code_reviews', value: 'list_code_reviews' },
        { label: 'describe_code_review', value: 'describe_code_review' }
    ]}
>
<TabItem value="list_code_reviews">

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
    <td><CopyableCode code="CodeReviewSummaries" /></td>
    <td><code>array</code></td>
    <td>A list of code reviews that meet the criteria of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_code_review">

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
    <td><CopyableCode code="AnalysisTypes" /></td>
    <td><code>array</code></td>
    <td>The types of analysis performed during a repository analysis or a pull request review. You can specify either Security, CodeQuality, or both.</td>
</tr>
<tr>
    <td><CopyableCode code="AssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the RepositoryAssociation that contains the reviewed source code. You can retrieve associated repository ARNs by calling ListRepositoryAssociations. (pattern: &lt;code&gt;^arn:aws&#91;^:\s&#93;*:codeguru-reviewer:&#91;^:\s&#93;+:&#91;\d&#93;&#123;12&#125;:association:&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CodeReviewArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the CodeReview object. (pattern: &lt;code&gt;^arn:aws&#91;^:\s&#93;*:codeguru-reviewer:&#91;^:\s&#93;+:&#91;\d&#93;&#123;12&#125;:&#91;a-z-&#93;+:&#91;\w-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigFileState" /></td>
    <td><code>string</code></td>
    <td>The state of the aws-codeguru-reviewer.yml configuration file that allows the configuration of the CodeGuru Reviewer analysis. The file either exists, doesn't exist, or exists with errors at the root directory of your repository. (Present, Absent, PresentWithErrors)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimeStamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in milliseconds since the epoch, when the code review was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimeStamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in milliseconds since the epoch, when the code review was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Metrics" /></td>
    <td><code>object</code></td>
    <td>The statistics from the code review.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the code review. (pattern: &lt;code&gt;^\S&#91;\w.-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, it can be the username or Amazon Web Services account ID. (pattern: &lt;code&gt;^\S(.*\S)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProviderType" /></td>
    <td><code>string</code></td>
    <td>The type of repository that contains the reviewed code (for example, GitHub or Bitbucket). (CodeCommit, GitHub, Bitbucket, GitHubEnterpriseServer, S3Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="PullRequestId" /></td>
    <td><code>string</code></td>
    <td>The pull request ID for the code review.</td>
</tr>
<tr>
    <td><CopyableCode code="RepositoryName" /></td>
    <td><code>string</code></td>
    <td>The name of the repository. (pattern: &lt;code&gt;^\S&#91;\w.-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceCodeType" /></td>
    <td><code>object</code></td>
    <td>Specifies the source code that is analyzed in a code review.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The valid code review states are: Completed: The code review is complete. Pending: The code review started and has not completed or failed. Failed: The code review failed. Deleting: The code review is being deleted. (Completed, Pending, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the state of the code review.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of code review. (PullRequest, RepositoryAnalysis)</td>
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
    <td><a href="#list_code_reviews"><CopyableCode code="list_code_reviews" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ProviderTypes"><code>ProviderTypes</code></a>, <a href="#parameter-States"><code>States</code></a>, <a href="#parameter-RepositoryNames"><code>RepositoryNames</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists all the code reviews that the customer has created in the past 90 days.</td>
</tr>
<tr>
    <td><a href="#describe_code_review"><CopyableCode code="describe_code_review" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-code_review_arn"><code>code_review_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the metadata associated with the code review along with its status.</td>
</tr>
<tr>
    <td><a href="#create_code_review"><CopyableCode code="create_code_review" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-RepositoryAssociationArn"><code>RepositoryAssociationArn</code></a>, <a href="#parameter-Type"><code>Type</code></a></td>
    <td></td>
    <td>Use to create a code review with a CodeReviewType of RepositoryAnalysis. This type of code review analyzes all code under a specified branch in an associated repository. PullRequest code reviews are automatically triggered by a pull request.</td>
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
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of code reviews to list in the response.</td>
</tr>
<tr id="parameter-code_review_arn">
    <td><CopyableCode code="code_review_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the CodeReview object.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned per call. The default is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.</td>
</tr>
<tr id="parameter-ProviderTypes">
    <td><CopyableCode code="ProviderTypes" /></td>
    <td><code>array</code></td>
    <td>List of provider types for filtering that needs to be applied before displaying the result. For example, providerTypes=&#91;GitHub&#93; lists code reviews from GitHub.</td>
</tr>
<tr id="parameter-RepositoryNames">
    <td><CopyableCode code="RepositoryNames" /></td>
    <td><code>array</code></td>
    <td>List of repository names for filtering that needs to be applied before displaying the result.</td>
</tr>
<tr id="parameter-States">
    <td><CopyableCode code="States" /></td>
    <td><code>array</code></td>
    <td>List of states for filtering that needs to be applied before displaying the result. For example, states=&#91;Pending&#93; lists code reviews in the Pending state. The valid code review states are: Completed: The code review is complete. Pending: The code review started and has not completed or failed. Failed: The code review failed. Deleting: The code review is being deleted.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_code_reviews"
    values={[
        { label: 'list_code_reviews', value: 'list_code_reviews' },
        { label: 'describe_code_review', value: 'describe_code_review' }
    ]}
>
<TabItem value="list_code_reviews">

Lists all the code reviews that the customer has created in the past 90 days.

```sql
SELECT
CodeReviewSummaries,
NextToken
FROM aws.codeguru_reviewer.code_reviews
WHERE Type = '{{ Type }}' -- required
AND region = '{{ region }}' -- required
AND ProviderTypes = '{{ ProviderTypes }}'
AND States = '{{ States }}'
AND RepositoryNames = '{{ RepositoryNames }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
<TabItem value="describe_code_review">

Returns the metadata associated with the code review along with its status.

```sql
SELECT
AnalysisTypes,
AssociationArn,
CodeReviewArn,
ConfigFileState,
CreatedTimeStamp,
LastUpdatedTimeStamp,
Metrics,
Name,
Owner,
ProviderType,
PullRequestId,
RepositoryName,
SourceCodeType,
State,
StateReason,
Type
FROM aws.codeguru_reviewer.code_reviews
WHERE code_review_arn = '{{ code_review_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_code_review"
    values={[
        { label: 'create_code_review', value: 'create_code_review' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_code_review">

Use to create a code review with a CodeReviewType of RepositoryAnalysis. This type of code review analyzes all code under a specified branch in an associated repository. PullRequest code reviews are automatically triggered by a pull request.

```sql
INSERT INTO aws.codeguru_reviewer.code_reviews (
Name,
RepositoryAssociationArn,
Type,
ClientRequestToken,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ RepositoryAssociationArn }}' /* required */,
'{{ Type }}' /* required */,
'{{ ClientRequestToken }}',
'{{ region }}'
RETURNING
CodeReview
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: code_reviews
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the code_reviews resource.
    - name: Name
      value: "{{ Name }}"
    - name: RepositoryAssociationArn
      value: "{{ RepositoryAssociationArn }}"
    - name: Type
      description: |
        The type of a code review. There are two code review types: PullRequest - A code review that is automatically triggered by a pull request on an associated repository. RepositoryAnalysis - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in CreateCodeReview.
      value:
        RepositoryAnalysis:
          RepositoryHead:
            BranchName: "{{ BranchName }}"
          SourceCodeType:
            CommitDiff:
              SourceCommit: "{{ SourceCommit }}"
              DestinationCommit: "{{ DestinationCommit }}"
              MergeBaseCommit: "{{ MergeBaseCommit }}"
            RepositoryHead:
              BranchName: "{{ BranchName }}"
            BranchDiff:
              SourceBranchName: "{{ SourceBranchName }}"
              DestinationBranchName: "{{ DestinationBranchName }}"
            S3BucketRepository:
              Name: "{{ Name }}"
              Details:
                BucketName: "{{ BucketName }}"
                CodeArtifacts: "{{ CodeArtifacts }}"
            RequestMetadata:
              RequestId: "{{ RequestId }}"
              Requester: "{{ Requester }}"
              EventInfo:
                Name: "{{ Name }}"
                State: "{{ State }}"
              VendorName: "{{ VendorName }}"
        AnalysisTypes:
          - "{{ AnalysisTypes }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
