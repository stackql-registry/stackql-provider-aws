--- 
title: review_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - review_templates
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>review_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="review_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.review_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_review_template"
    values={[
        { label: 'get_review_template', value: 'get_review_template' },
        { label: 'list_review_templates', value: 'list_review_templates' }
    ]}
>
<TabItem value="get_review_template">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The review template description. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_.,:/()@!&?#+'’\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lenses" /></td>
    <td><code>array</code></td>
    <td>The lenses applied to the review template.</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>string</code></td>
    <td>The notes associated with the workload. For a review template, these are the notes that will be associated with the workload when the template is applied.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services account ID. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="question_counts" /></td>
    <td><code>object</code></td>
    <td>A count of how many total questions are answered and unanswered in the review template.</td>
</tr>
<tr>
    <td><CopyableCode code="share_invitation_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the template share invitation. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the review template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The review template ARN. (pattern: &lt;code&gt;arn:aws(-us-gov|-iso(-&#91;a-z&#93;)?|-cn)?:wellarchitected:&#91;a-z&#93;&#123;2&#125;(-gov|-iso(&#91;a-z&#93;)?)?-&#91;a-z&#93;+-\d:\d&#123;12&#125;:(review-template)/&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the review template. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_.,:/()@!&?#+'’\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_status" /></td>
    <td><code>string</code></td>
    <td>The latest status of a review template. (CURRENT, LENS_NOT_CURRENT)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the review template was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_review_templates">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+\/=_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="review_templates" /></td>
    <td><code>array</code></td>
    <td>List of review templates.</td>
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
    <td><a href="#get_review_template"><CopyableCode code="get_review_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get review template.</td>
</tr>
<tr>
    <td><a href="#list_review_templates"><CopyableCode code="list_review_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>List review templates.</td>
</tr>
<tr>
    <td><a href="#create_review_template"><CopyableCode code="create_review_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Lenses"><code>Lenses</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Create a review template. Disclaimer Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your review templates. If your review template or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</td>
</tr>
<tr>
    <td><a href="#update_review_template"><CopyableCode code="update_review_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a review template.</td>
</tr>
<tr>
    <td><a href="#delete_review_template"><CopyableCode code="delete_review_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a review template. Only the owner of a review template can delete it. After the review template is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the review template with will no longer be able to apply it to new workloads.</td>
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
<tr id="parameter-ClientRequestToken">
    <td><CopyableCode code="ClientRequestToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_arn">
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The review template ARN.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_review_template"
    values={[
        { label: 'get_review_template', value: 'get_review_template' },
        { label: 'list_review_templates', value: 'list_review_templates' }
    ]}
>
<TabItem value="get_review_template">

Get review template.

```sql
SELECT
description,
lenses,
notes,
owner,
question_counts,
share_invitation_id,
tags,
template_arn,
template_name,
update_status,
updated_at
FROM aws.wellarchitected.review_templates
WHERE template_arn = '{{ template_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_review_templates">

List review templates.

```sql
SELECT
next_token,
review_templates
FROM aws.wellarchitected.review_templates
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_review_template"
    values={[
        { label: 'create_review_template', value: 'create_review_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_review_template">

Create a review template. Disclaimer Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your review templates. If your review template or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.

```sql
INSERT INTO aws.wellarchitected.review_templates (
TemplateName,
Description,
Lenses,
Notes,
Tags,
ClientRequestToken,
region
)
SELECT 
'{{ TemplateName }}' /* required */,
'{{ Description }}' /* required */,
'{{ Lenses }}' /* required */,
'{{ Notes }}',
'{{ Tags }}',
'{{ ClientRequestToken }}' /* required */,
'{{ region }}'
RETURNING
template_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: review_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the review_templates resource.
    - name: TemplateName
      value: "{{ TemplateName }}"
    - name: Description
      value: "{{ Description }}"
    - name: Lenses
      value:
        - "{{ Lenses }}"
    - name: Notes
      value: "{{ Notes }}"
      description: |
        The notes associated with the workload. For a review template, these are the notes that will be associated with the workload when the template is applied.
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned. This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_review_template"
    values={[
        { label: 'update_review_template', value: 'update_review_template' }
    ]}
>
<TabItem value="update_review_template">

Update a review template.

```sql
UPDATE aws.wellarchitected.review_templates
SET 
TemplateName = '{{ TemplateName }}',
Description = '{{ Description }}',
Notes = '{{ Notes }}',
LensesToAssociate = '{{ LensesToAssociate }}',
LensesToDisassociate = '{{ LensesToDisassociate }}'
WHERE 
template_arn = '{{ template_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
review_template;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_review_template"
    values={[
        { label: 'delete_review_template', value: 'delete_review_template' }
    ]}
>
<TabItem value="delete_review_template">

Delete a review template. Only the owner of a review template can delete it. After the review template is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the review template with will no longer be able to apply it to new workloads.

```sql
DELETE FROM aws.wellarchitected.review_templates
WHERE template_arn = '{{ template_arn }}' --required
AND ClientRequestToken = '{{ ClientRequestToken }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
