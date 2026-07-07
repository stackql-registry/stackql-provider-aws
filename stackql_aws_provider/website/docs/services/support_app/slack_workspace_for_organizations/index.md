--- 
title: slack_workspace_for_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - slack_workspace_for_organizations
  - support_app
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

Creates, updates, deletes, gets or lists a <code>slack_workspace_for_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slack_workspace_for_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support_app.slack_workspace_for_organizations" /></td></tr>
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
    <td><a href="#register_slack_workspace_for_organization"><CopyableCode code="register_slack_workspace_for_organization" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-teamId"><code>teamId</code></a></td>
    <td></td>
    <td>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations. If you're the management account and you want to register Slack workspaces for your organization, you must complete the following tasks: Sign in to the Amazon Web Services Support Center and authorize the Slack workspaces where you want your organization to have access to. See Authorize a Slack workspace in the Amazon Web Services Support User Guide. Call the RegisterSlackWorkspaceForOrganization API to authorize each Slack workspace for the organization. After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the Amazon Web Services Support Center. To use the Amazon Web Services Support App, each account must then complete the following tasks: Create an Identity and Access Management (IAM) role with the required permission. For more information, see Managing access to the Amazon Web Services Support App. Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see Configuring a Slack channel.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="register_slack_workspace_for_organization"
    values={[
        { label: 'register_slack_workspace_for_organization', value: 'register_slack_workspace_for_organization' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_slack_workspace_for_organization">

Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations. If you're the management account and you want to register Slack workspaces for your organization, you must complete the following tasks: Sign in to the Amazon Web Services Support Center and authorize the Slack workspaces where you want your organization to have access to. See Authorize a Slack workspace in the Amazon Web Services Support User Guide. Call the RegisterSlackWorkspaceForOrganization API to authorize each Slack workspace for the organization. After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the Amazon Web Services Support Center. To use the Amazon Web Services Support App, each account must then complete the following tasks: Create an Identity and Access Management (IAM) role with the required permission. For more information, see Managing access to the Amazon Web Services Support App. Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see Configuring a Slack channel.

```sql
INSERT INTO aws.support_app.slack_workspace_for_organizations (
teamId,
region
)
SELECT 
'{{ teamId }}' /* required */,
'{{ region }}'
RETURNING
accountType,
teamId,
teamName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: slack_workspace_for_organizations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the slack_workspace_for_organizations resource.
    - name: teamId
      value: "{{ teamId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
