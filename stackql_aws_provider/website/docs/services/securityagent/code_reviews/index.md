--- 
title: code_reviews
hide_title: false
hide_table_of_contents: false
keywords:
  - code_reviews
  - securityagent
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.code_reviews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_code_reviews"
    values={[
        { label: 'batch_get_code_reviews', value: 'batch_get_code_reviews' },
        { label: 'list_code_reviews', value: 'list_code_reviews' }
    ]}
>
<TabItem value="batch_get_code_reviews">

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
    <td><CopyableCode code="code_reviews" /></td>
    <td><code>array</code></td>
    <td>The list of code reviews that were found.</td>
</tr>
<tr>
    <td><CopyableCode code="not_found" /></td>
    <td><code>array</code></td>
    <td>List of code review IDs.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent space that contains the code review.</td>
</tr>
<tr>
    <td><CopyableCode code="code_review_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code review.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the code review was created, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the code review.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the code review was last updated, in UTC format.</td>
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
    <td><a href="#batch_get_code_reviews"><CopyableCode code="batch_get_code_reviews" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about one or more code reviews in an agent space.</td>
</tr>
<tr>
    <td><a href="#list_code_reviews"><CopyableCode code="list_code_reviews" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of code review summaries for the specified agent space.</td>
</tr>
<tr>
    <td><a href="#create_code_review"><CopyableCode code="create_code_review" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-title"><code>title</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a>, <a href="#parameter-assets"><code>assets</code></a></td>
    <td></td>
    <td>Creates a new code review configuration in an agent space. A code review defines the parameters for automated security-focused code analysis.</td>
</tr>
<tr>
    <td><a href="#update_code_review"><CopyableCode code="update_code_review" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-codeReviewId"><code>codeReviewId</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a></td>
    <td></td>
    <td>Updates an existing code review configuration.</td>
</tr>
<tr>
    <td><a href="#batch_delete_code_reviews"><CopyableCode code="batch_delete_code_reviews" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-codeReviewIds"><code>codeReviewIds</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a></td>
    <td></td>
    <td>Deletes one or more code reviews from an agent space.</td>
</tr>
<tr>
    <td><a href="#start_code_review_job"><CopyableCode code="start_code_review_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a>, <a href="#parameter-codeReviewId"><code>codeReviewId</code></a></td>
    <td></td>
    <td>Starts a new code review job for a code review configuration. The job executes the security-focused code analysis defined in the code review.</td>
</tr>
<tr>
    <td><a href="#stop_code_review_job"><CopyableCode code="stop_code_review_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a>, <a href="#parameter-codeReviewJobId"><code>codeReviewJobId</code></a></td>
    <td></td>
    <td>Stops a running code review job. The job transitions to a stopping state and then to stopped after cleanup completes.</td>
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
    defaultValue="batch_get_code_reviews"
    values={[
        { label: 'batch_get_code_reviews', value: 'batch_get_code_reviews' },
        { label: 'list_code_reviews', value: 'list_code_reviews' }
    ]}
>
<TabItem value="batch_get_code_reviews">

Retrieves information about one or more code reviews in an agent space.

```sql
SELECT
code_reviews,
not_found
FROM aws.securityagent.code_reviews
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_code_reviews">

Returns a paginated list of code review summaries for the specified agent space.

```sql
SELECT
agent_space_id,
code_review_id,
created_at,
title_,
updated_at
FROM aws.securityagent.code_reviews
WHERE region = '{{ region }}' -- required
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

Creates a new code review configuration in an agent space. A code review defines the parameters for automated security-focused code analysis.

```sql
INSERT INTO aws.securityagent.code_reviews (
title,
agentSpaceId,
assets,
serviceRole,
logConfig,
codeRemediationStrategy,
validationMode,
maxTaskHours,
region
)
SELECT 
'{{ title }}' /* required */,
'{{ agentSpaceId }}' /* required */,
'{{ assets }}' /* required */,
'{{ serviceRole }}',
'{{ logConfig }}',
'{{ codeRemediationStrategy }}',
'{{ validationMode }}',
{{ maxTaskHours }},
'{{ region }}'
RETURNING
agent_space_id,
assets,
code_remediation_strategy,
code_review_id,
created_at,
log_config,
max_task_hours,
service_role,
title_,
updated_at,
validation_mode
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
    - name: title
      value: "{{ title }}"
    - name: agentSpaceId
      value: "{{ agentSpaceId }}"
    - name: assets
      description: |
        The collection of assets used in a pentest configuration, including endpoints, actors, documents, source code repositories, and integrated repositories.
      value:
        endpoints:
          - uri: "{{ uri }}"
        actors:
          - identifier: "{{ identifier }}"
            uris: "{{ uris }}"
            authentication:
              providerType: "{{ providerType }}"
              value: "{{ value }}"
            description: "{{ description }}"
            enableEmailMfa: {{ enableEmailMfa }}
            mfaForwardingAddress: "{{ mfaForwardingAddress }}"
        documents:
          - s3Location: "{{ s3Location }}"
            artifactId: "{{ artifactId }}"
            integratedDocument:
              integrationId: "{{ integrationId }}"
              resourceId: "{{ resourceId }}"
        sourceCode:
          - s3Location: "{{ s3Location }}"
        integratedRepositories:
          - integrationId: "{{ integrationId }}"
            providerResourceId: "{{ providerResourceId }}"
            branch: "{{ branch }}"
    - name: serviceRole
      value: "{{ serviceRole }}"
      description: |
        ARN of an IAM role that the service can assume to access customer resources.
    - name: logConfig
      description: |
        The Amazon CloudWatch Logs configuration for pentest job logging.
      value:
        logGroup: "{{ logGroup }}"
        logStream: "{{ logStream }}"
    - name: codeRemediationStrategy
      value: "{{ codeRemediationStrategy }}"
      description: |
        Strategy for automated code remediation.
      valid_values: ['AUTOMATIC', 'DISABLED']
    - name: validationMode
      value: "{{ validationMode }}"
      description: |
        Mode of validation to perform on findings
      valid_values: ['DISABLED', 'SIMULATED']
    - name: maxTaskHours
      value: {{ maxTaskHours }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_code_review"
    values={[
        { label: 'update_code_review', value: 'update_code_review' }
    ]}
>
<TabItem value="update_code_review">

Updates an existing code review configuration.

```sql
UPDATE aws.securityagent.code_reviews
SET 
codeReviewId = '{{ codeReviewId }}',
agentSpaceId = '{{ agentSpaceId }}',
title = '{{ title }}',
assets = '{{ assets }}',
serviceRole = '{{ serviceRole }}',
logConfig = '{{ logConfig }}',
codeRemediationStrategy = '{{ codeRemediationStrategy }}',
validationMode = '{{ validationMode }}',
maxTaskHours = {{ maxTaskHours }}
WHERE 
region = '{{ region }}' --required
AND codeReviewId = '{{ codeReviewId }}' --required
AND agentSpaceId = '{{ agentSpaceId }}' --required
RETURNING
agent_space_id,
assets,
code_remediation_strategy,
code_review_id,
created_at,
log_config,
max_task_hours,
service_role,
title_,
updated_at,
validation_mode;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_code_reviews"
    values={[
        { label: 'batch_delete_code_reviews', value: 'batch_delete_code_reviews' },
        { label: 'start_code_review_job', value: 'start_code_review_job' },
        { label: 'stop_code_review_job', value: 'stop_code_review_job' }
    ]}
>
<TabItem value="batch_delete_code_reviews">

Deletes one or more code reviews from an agent space.

```sql
EXEC aws.securityagent.code_reviews.batch_delete_code_reviews 
@region='{{ region }}' --required 
@@json=
'{
"codeReviewIds": "{{ codeReviewIds }}", 
"agentSpaceId": "{{ agentSpaceId }}"
}'
;
```
</TabItem>
<TabItem value="start_code_review_job">

Starts a new code review job for a code review configuration. The job executes the security-focused code analysis defined in the code review.

```sql
EXEC aws.securityagent.code_reviews.start_code_review_job 
@region='{{ region }}' --required 
@@json=
'{
"agentSpaceId": "{{ agentSpaceId }}", 
"codeReviewId": "{{ codeReviewId }}", 
"diffSource": "{{ diffSource }}"
}'
;
```
</TabItem>
<TabItem value="stop_code_review_job">

Stops a running code review job. The job transitions to a stopping state and then to stopped after cleanup completes.

```sql
EXEC aws.securityagent.code_reviews.stop_code_review_job 
@region='{{ region }}' --required 
@@json=
'{
"agentSpaceId": "{{ agentSpaceId }}", 
"codeReviewJobId": "{{ codeReviewJobId }}"
}'
;
```
</TabItem>
</Tabs>
