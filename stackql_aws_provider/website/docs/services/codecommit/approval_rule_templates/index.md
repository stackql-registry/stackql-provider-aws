--- 
title: approval_rule_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - approval_rule_templates
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

Creates, updates, deletes, gets or lists an <code>approval_rule_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="approval_rule_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.approval_rule_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_approval_rule_template"
    values={[
        { label: 'get_approval_rule_template', value: 'get_approval_rule_template' },
        { label: 'list_approval_rule_templates', value: 'list_approval_rule_templates' }
    ]}
>
<TabItem value="get_approval_rule_template">

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
    <td><CopyableCode code="approvalRuleTemplateContent" /></td>
    <td><code>string</code></td>
    <td>The content of the approval rule template.</td>
</tr>
<tr>
    <td><CopyableCode code="approvalRuleTemplateDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the approval rule template.</td>
</tr>
<tr>
    <td><CopyableCode code="approvalRuleTemplateId" /></td>
    <td><code>string</code></td>
    <td>The system-generated ID of the approval rule template.</td>
</tr>
<tr>
    <td><CopyableCode code="approvalRuleTemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the approval rule template.</td>
</tr>
<tr>
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the approval rule template was created, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the approval rule template was most recently changed, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedUser" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule template.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleContentSha256" /></td>
    <td><code>string</code></td>
    <td>The SHA-256 hash signature for the content of the approval rule template.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_approval_rule_templates">

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
    <td><CopyableCode code="approval_rule_template_name" /></td>
    <td><code>string</code></td>
    <td>The names of all the approval rule templates found in the Amazon Web Services Region for your Amazon Web Services account.</td>
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
    <td><a href="#get_approval_rule_template"><CopyableCode code="get_approval_rule_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specified approval rule template.</td>
</tr>
<tr>
    <td><a href="#list_approval_rule_templates"><CopyableCode code="list_approval_rule_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all approval rule templates in the specified Amazon Web Services Region in your Amazon Web Services account. If an Amazon Web Services Region is not specified, the Amazon Web Services Region where you are signed in is used.</td>
</tr>
<tr>
    <td><a href="#create_approval_rule_template"><CopyableCode code="create_approval_rule_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-approvalRuleTemplateName"><code>approvalRuleTemplateName</code></a>, <a href="#parameter-approvalRuleTemplateContent"><code>approvalRuleTemplateContent</code></a></td>
    <td></td>
    <td>Creates a template for approval rules that can then be associated with one or more repositories in your Amazon Web Services account. When you associate a template with a repository, CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see AssociateApprovalRuleTemplateWithRepository.</td>
</tr>
<tr>
    <td><a href="#update_approval_rule_template_content"><CopyableCode code="update_approval_rule_template_content" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-approvalRuleTemplateName"><code>approvalRuleTemplateName</code></a>, <a href="#parameter-newRuleContent"><code>newRuleContent</code></a></td>
    <td></td>
    <td>Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.</td>
</tr>
<tr>
    <td><a href="#update_approval_rule_template_description"><CopyableCode code="update_approval_rule_template_description" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-approvalRuleTemplateName"><code>approvalRuleTemplateName</code></a>, <a href="#parameter-approvalRuleTemplateDescription"><code>approvalRuleTemplateDescription</code></a></td>
    <td></td>
    <td>Updates the description for a specified approval rule template.</td>
</tr>
<tr>
    <td><a href="#update_approval_rule_template_name"><CopyableCode code="update_approval_rule_template_name" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-oldApprovalRuleTemplateName"><code>oldApprovalRuleTemplateName</code></a>, <a href="#parameter-newApprovalRuleTemplateName"><code>newApprovalRuleTemplateName</code></a></td>
    <td></td>
    <td>Updates the name of a specified approval rule template.</td>
</tr>
<tr>
    <td><a href="#delete_approval_rule_template"><CopyableCode code="delete_approval_rule_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.</td>
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
    defaultValue="get_approval_rule_template"
    values={[
        { label: 'get_approval_rule_template', value: 'get_approval_rule_template' },
        { label: 'list_approval_rule_templates', value: 'list_approval_rule_templates' }
    ]}
>
<TabItem value="get_approval_rule_template">

Returns information about a specified approval rule template.

```sql
SELECT
approvalRuleTemplateContent,
approvalRuleTemplateDescription,
approvalRuleTemplateId,
approvalRuleTemplateName,
creationDate,
lastModifiedDate,
lastModifiedUser,
ruleContentSha256
FROM aws.codecommit.approval_rule_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_approval_rule_templates">

Lists all approval rule templates in the specified Amazon Web Services Region in your Amazon Web Services account. If an Amazon Web Services Region is not specified, the Amazon Web Services Region where you are signed in is used.

```sql
SELECT
approval_rule_template_name
FROM aws.codecommit.approval_rule_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_approval_rule_template"
    values={[
        { label: 'create_approval_rule_template', value: 'create_approval_rule_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_approval_rule_template">

Creates a template for approval rules that can then be associated with one or more repositories in your Amazon Web Services account. When you associate a template with a repository, CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see AssociateApprovalRuleTemplateWithRepository.

```sql
INSERT INTO aws.codecommit.approval_rule_templates (
approvalRuleTemplateName,
approvalRuleTemplateContent,
approvalRuleTemplateDescription,
region
)
SELECT 
'{{ approvalRuleTemplateName }}' /* required */,
'{{ approvalRuleTemplateContent }}' /* required */,
'{{ approvalRuleTemplateDescription }}',
'{{ region }}'
RETURNING
approvalRuleTemplate
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: approval_rule_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the approval_rule_templates resource.
    - name: approvalRuleTemplateName
      value: "{{ approvalRuleTemplateName }}"
      description: |
        The name of the approval rule template. Provide descriptive names, because this name is applied to the approval rules created automatically in associated repositories.
    - name: approvalRuleTemplateContent
      value: "{{ approvalRuleTemplateContent }}"
      description: |
        The content of the approval rule that is created on pull requests in associated repositories. If you specify one or more destination references (branches), approval rules are created in an associated repository only if their destination references (branches) match those specified in the template. When you create the content of the approval rule template, you can specify approvers in an approval pool in one of two ways: CodeCommitApprovers: This option only requires an Amazon Web Services account and a resource. It can be used for both IAM users and federated access users whose name matches the provided resource name. This is a very powerful option that offers a great deal of flexibility. For example, if you specify the Amazon Web Services account 123456789012 and Mary_Major, all of the following are counted as approvals coming from that user: An IAM user in the account (arn:aws:iam::123456789012:user/Mary_Major) A federated user identified in IAM as Mary_Major (arn:aws:sts::123456789012:federated-user/Mary_Major) This option does not recognize an active session of someone assuming the role of CodeCommitReview with a role session name of Mary_Major (arn:aws:sts::123456789012:assumed-role/CodeCommitReview/Mary_Major) unless you include a wildcard (*Mary_Major). Fully qualified ARN: This option allows you to specify the fully qualified Amazon Resource Name (ARN) of the IAM user or role. For more information about IAM ARNs, wildcards, and formats, see IAM Identifiers in the IAM User Guide.
    - name: approvalRuleTemplateDescription
      value: "{{ approvalRuleTemplateDescription }}"
      description: |
        The description of the approval rule template. Consider providing a description that explains what this template does and when it might be appropriate to associate it with repositories.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_approval_rule_template_content"
    values={[
        { label: 'update_approval_rule_template_content', value: 'update_approval_rule_template_content' },
        { label: 'update_approval_rule_template_description', value: 'update_approval_rule_template_description' },
        { label: 'update_approval_rule_template_name', value: 'update_approval_rule_template_name' }
    ]}
>
<TabItem value="update_approval_rule_template_content">

Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.

```sql
UPDATE aws.codecommit.approval_rule_templates
SET 
approvalRuleTemplateName = '{{ approvalRuleTemplateName }}',
newRuleContent = '{{ newRuleContent }}',
existingRuleContentSha256 = '{{ existingRuleContentSha256 }}'
WHERE 
region = '{{ region }}' --required
AND approvalRuleTemplateName = '{{ approvalRuleTemplateName }}' --required
AND newRuleContent = '{{ newRuleContent }}' --required
RETURNING
approvalRuleTemplate;
```
</TabItem>
<TabItem value="update_approval_rule_template_description">

Updates the description for a specified approval rule template.

```sql
UPDATE aws.codecommit.approval_rule_templates
SET 
approvalRuleTemplateName = '{{ approvalRuleTemplateName }}',
approvalRuleTemplateDescription = '{{ approvalRuleTemplateDescription }}'
WHERE 
region = '{{ region }}' --required
AND approvalRuleTemplateName = '{{ approvalRuleTemplateName }}' --required
AND approvalRuleTemplateDescription = '{{ approvalRuleTemplateDescription }}' --required
RETURNING
approvalRuleTemplate;
```
</TabItem>
<TabItem value="update_approval_rule_template_name">

Updates the name of a specified approval rule template.

```sql
UPDATE aws.codecommit.approval_rule_templates
SET 
oldApprovalRuleTemplateName = '{{ oldApprovalRuleTemplateName }}',
newApprovalRuleTemplateName = '{{ newApprovalRuleTemplateName }}'
WHERE 
region = '{{ region }}' --required
AND oldApprovalRuleTemplateName = '{{ oldApprovalRuleTemplateName }}' --required
AND newApprovalRuleTemplateName = '{{ newApprovalRuleTemplateName }}' --required
RETURNING
approvalRuleTemplate;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_approval_rule_template"
    values={[
        { label: 'delete_approval_rule_template', value: 'delete_approval_rule_template' }
    ]}
>
<TabItem value="delete_approval_rule_template">

Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.

```sql
DELETE FROM aws.codecommit.approval_rule_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
