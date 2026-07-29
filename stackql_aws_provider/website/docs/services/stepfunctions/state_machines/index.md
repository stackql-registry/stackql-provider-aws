--- 
title: state_machines
hide_title: false
hide_table_of_contents: false
keywords:
  - state_machines
  - stepfunctions
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

Creates, updates, deletes, gets or lists a <code>state_machines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="state_machines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.stepfunctions.state_machines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_state_machine"
    values={[
        { label: 'describe_state_machine', value: 'describe_state_machine' },
        { label: 'list_state_machines', value: 'list_state_machines' }
    ]}
>
<TabItem value="describe_state_machine">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the state machine. A name must not contain: white space brackets &lt; &gt; &#123; &#125; &#91; &#93; wildcard characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the state machine is created. For a state machine version, creationDate is the date the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>string</code></td>
    <td>The Amazon States Language definition of the state machine. See Amazon States Language. If called with includedData = METADATA_ONLY, the returned definition will be &#123;&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the state machine version.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>Settings to configure server-side encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>A user-defined or an auto-generated string that identifies a Map state. This parameter is present only if the stateMachineArn specified in input is a qualified state machine ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_configuration" /></td>
    <td><code>object</code></td>
    <td>The LoggingConfiguration data type is used to set CloudWatch Logs options.</td>
</tr>
<tr>
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>The revision identifier for the state machine. Use the revisionId parameter to compare between versions of a state machine configuration used for executions without performing a diff of the properties, such as definition and roleArn.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used when creating this state machine. (The IAM role maintains security by granting Step Functions access to Amazon Web Services resources.)</td>
</tr>
<tr>
    <td><CopyableCode code="state_machine_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the state machine. If you specified a state machine version ARN in your request, the API returns the version ARN. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, stateMachineARN:1.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the state machine. (ACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="tracing_configuration" /></td>
    <td><code>object</code></td>
    <td>Selects whether X-Ray tracing is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the state machine (STANDARD or EXPRESS). (STANDARD, EXPRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="variable_references" /></td>
    <td><code>object</code></td>
    <td>A map of state name to a list of variables referenced by that state. States that do not use variable references will not be shown in the response.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_state_machines">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the state machine. A name must not contain: white space brackets &lt; &gt; &#123; &#125; &#91; &#93; wildcard characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the state machine is created.</td>
</tr>
<tr>
    <td><CopyableCode code="state_machine_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the state machine.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td> (STANDARD, EXPRESS)</td>
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
    <td><a href="#describe_state_machine"><CopyableCode code="describe_state_machine" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following qualified state machine ARN refers to an alias named PROD. arn:<code>&lt;partition&gt;</code>:states:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:stateMachine:<code>&lt;myStateMachine:PROD&gt;</code> If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn:<code>&lt;partition&gt;</code>:states:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:stateMachine:<code>&lt;myStateMachine&gt;</code> This API action returns the details for a state machine version if the stateMachineArn you specify is a state machine version ARN. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</td>
</tr>
<tr>
    <td><a href="#list_state_machines"><CopyableCode code="list_state_machines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the existing state machines. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</td>
</tr>
<tr>
    <td><a href="#create_state_machine"><CopyableCode code="create_state_machine" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-definition"><code>definition</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a state machine. A state machine consists of a collection of states that can do work (Task states), determine to which states to transition next (Choice states), stop an execution with an error (Fail states), and so on. State machines are specified using a JSON-based, structured language. For more information, see Amazon States Language in the Step Functions User Guide. If you set the publish parameter of this API action to true, it publishes version 1 as the first revision of the state machine. For additional control over security, you can encrypt your data using a customer-managed key for Step Functions state machines. You can configure a symmetric KMS key and data key reuse period when creating or updating a State Machine. The execution history and state machine definition will be encrypted with the key applied to the State Machine. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. CreateStateMachine is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. CreateStateMachine's idempotency check is based on the state machine name, definition, type, LoggingConfiguration, TracingConfiguration, and EncryptionConfiguration The check is also based on the publish and versionDescription parameters. If a following request has a different roleArn or tags, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, roleArn and tags will not be updated, even if they are different.</td>
</tr>
<tr>
    <td><a href="#update_state_machine"><CopyableCode code="update_state_machine" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stateMachineArn"><code>stateMachineArn</code></a></td>
    <td></td>
    <td>Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration, or EncryptionConfiguration. Running executions will continue to use the previous definition and roleArn. You must include at least one of definition or roleArn or you will receive a MissingRequiredParameter error. A qualified state machine ARN refers to a Distributed Map state defined within a state machine. For example, the qualified state machine ARN arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following qualified state machine ARN refers to an alias named PROD. arn:<code>&lt;partition&gt;</code>:states:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:stateMachine:<code>&lt;myStateMachine:PROD&gt;</code> If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn:<code>&lt;partition&gt;</code>:states:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:stateMachine:<code>&lt;myStateMachine&gt;</code> After you update your state machine, you can set the publish parameter to true in the same action to publish a new version. This way, you can opt-in to strict versioning of your state machine. Step Functions assigns monotonically increasing integers for state machine versions, starting at version number 1. All StartExecution calls within a few seconds use the updated definition and roleArn. Executions started immediately after you call UpdateStateMachine may use the previous state machine definition and roleArn.</td>
</tr>
<tr>
    <td><a href="#delete_state_machine"><CopyableCode code="delete_state_machine" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to DELETING and begins the deletion process. A state machine is deleted only when all its executions are completed. On the next state transition, the state machine's executions are terminated. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine This API action also deletes all versions and aliases associated with a state machine. For EXPRESS state machines, the deletion happens eventually (usually in less than a minute). Running executions may emit logs after DeleteStateMachine API is called.</td>
</tr>
<tr>
    <td><a href="#publish_state_machine_version"><CopyableCode code="publish_state_machine_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stateMachineArn"><code>stateMachineArn</code></a></td>
    <td></td>
    <td>Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the DeleteStateMachineVersion API action. PublishStateMachineVersion is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a revisionId, Step Functions checks for a previously published version of the state machine's current revision. Related operations: DeleteStateMachineVersion ListStateMachineVersions</td>
</tr>
<tr>
    <td><a href="#start_sync_execution"><CopyableCode code="start_sync_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stateMachineArn"><code>stateMachineArn</code></a></td>
    <td></td>
    <td>Starts a Synchronous Express state machine execution. StartSyncExecution is not available for STANDARD workflows. StartSyncExecution will return a 200 OK response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration. This API action isn't logged in CloudTrail.</td>
</tr>
<tr>
    <td><a href="#validate_state_machine_definition"><CopyableCode code="validate_state_machine_definition" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Validates the syntax of a state machine definition specified in Amazon States Language (ASL), a JSON-based, structured language. You can validate that a state machine definition is correct without creating a state machine resource. Suggested uses for ValidateStateMachineDefinition: Integrate automated checks into your code review or Continuous Integration (CI) process to check state machine definitions before starting deployments. Run validation from a Git pre-commit hook to verify the definition before committing to your source repository. Validation will look for problems in your state machine definition and return a result and a list of diagnostic elements. The result value will be OK when your workflow definition can be successfully created or updated. Note the result can be OK even when diagnostic warnings are present in the response. The result value will be FAIL when the workflow definition contains errors that would prevent you from creating or updating your state machine. The list of ValidateStateMachineDefinitionDiagnostic data elements can contain zero or more WARNING and/or ERROR elements. The ValidateStateMachineDefinition API might add new diagnostics in the future, adjust diagnostic codes, or change the message wording. Your automated processes should only rely on the value of the result field value (OK, FAIL). Do not rely on the exact order, count, or wording of diagnostic messages.</td>
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
    defaultValue="describe_state_machine"
    values={[
        { label: 'describe_state_machine', value: 'describe_state_machine' },
        { label: 'list_state_machines', value: 'list_state_machines' }
    ]}
>
<TabItem value="describe_state_machine">

Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following qualified state machine ARN refers to an alias named PROD. arn:<code>&lt;partition&gt;</code>:states:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:stateMachine:<code>&lt;myStateMachine:PROD&gt;</code> If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn:<code>&lt;partition&gt;</code>:states:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:stateMachine:<code>&lt;myStateMachine&gt;</code> This API action returns the details for a state machine version if the stateMachineArn you specify is a state machine version ARN. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

```sql
SELECT
name,
creation_date,
definition,
description,
encryption_configuration,
label,
logging_configuration,
revision_id,
role_arn,
state_machine_arn,
status,
tracing_configuration,
type_,
variable_references
FROM aws.stepfunctions.state_machines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_state_machines">

Lists the existing state machines. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

```sql
SELECT
name,
creation_date,
state_machine_arn,
type_
FROM aws.stepfunctions.state_machines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_state_machine"
    values={[
        { label: 'create_state_machine', value: 'create_state_machine' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_state_machine">

Creates a state machine. A state machine consists of a collection of states that can do work (Task states), determine to which states to transition next (Choice states), stop an execution with an error (Fail states), and so on. State machines are specified using a JSON-based, structured language. For more information, see Amazon States Language in the Step Functions User Guide. If you set the publish parameter of this API action to true, it publishes version 1 as the first revision of the state machine. For additional control over security, you can encrypt your data using a customer-managed key for Step Functions state machines. You can configure a symmetric KMS key and data key reuse period when creating or updating a State Machine. The execution history and state machine definition will be encrypted with the key applied to the State Machine. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. CreateStateMachine is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. CreateStateMachine's idempotency check is based on the state machine name, definition, type, LoggingConfiguration, TracingConfiguration, and EncryptionConfiguration The check is also based on the publish and versionDescription parameters. If a following request has a different roleArn or tags, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, roleArn and tags will not be updated, even if they are different.

```sql
INSERT INTO aws.stepfunctions.state_machines (
name,
definition,
roleArn,
type,
loggingConfiguration,
tags,
tracingConfiguration,
publish,
versionDescription,
encryptionConfiguration,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ definition }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ type }}',
'{{ loggingConfiguration }}',
'{{ tags }}',
'{{ tracingConfiguration }}',
{{ publish }},
'{{ versionDescription }}',
'{{ encryptionConfiguration }}',
'{{ region }}'
RETURNING
creation_date,
state_machine_arn,
state_machine_version_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: state_machines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the state_machines resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the state machine. A name must not contain: white space brackets < > { } [ ] wildcard characters ? * special characters " # % \ ^ | ~ \` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
    - name: definition
      value: "{{ definition }}"
      description: |
        The Amazon States Language definition of the state machine. See Amazon States Language.
    - name: roleArn
      value: "{{ roleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
    - name: type
      value: "{{ type }}"
      description: |
        Determines whether a Standard or Express state machine is created. The default is STANDARD. You cannot update the type of a state machine once it has been created.
      valid_values: ['STANDARD', 'EXPRESS']
    - name: loggingConfiguration
      description: |
        Defines what execution history events are logged and where they are logged. By default, the level is set to OFF. For more information see Log Levels in the Step Functions User Guide.
      value:
        level: "{{ level }}"
        includeExecutionData: {{ includeExecutionData }}
        destinations:
          - cloudWatchLogsLogGroup:
              logGroupArn: "{{ logGroupArn }}"
    - name: tags
      description: |
        Tags to be added when creating a state machine. An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: tracingConfiguration
      description: |
        Selects whether X-Ray tracing is enabled.
      value:
        enabled: {{ enabled }}
    - name: publish
      value: {{ publish }}
      description: |
        Set to true to publish the first version of the state machine during creation. The default is false.
    - name: versionDescription
      value: "{{ versionDescription }}"
      description: |
        Sets description about the state machine version. You can only set the description if the publish parameter is set to true. Otherwise, if you set versionDescription, but publish to false, this API action throws ValidationException.
    - name: encryptionConfiguration
      description: |
        Settings to configure server-side encryption.
      value:
        kmsKeyId: "{{ kmsKeyId }}"
        kmsDataKeyReusePeriodSeconds: {{ kmsDataKeyReusePeriodSeconds }}
        type_: "{{ type_ }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_state_machine"
    values={[
        { label: 'update_state_machine', value: 'update_state_machine' }
    ]}
>
<TabItem value="update_state_machine">

Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration, or EncryptionConfiguration. Running executions will continue to use the previous definition and roleArn. You must include at least one of definition or roleArn or you will receive a MissingRequiredParameter error. A qualified state machine ARN refers to a Distributed Map state defined within a state machine. For example, the qualified state machine ARN arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following qualified state machine ARN refers to an alias named PROD. arn:<code>&lt;partition&gt;</code>:states:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:stateMachine:<code>&lt;myStateMachine:PROD&gt;</code> If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn:<code>&lt;partition&gt;</code>:states:<code>&lt;region&gt;</code>:<code>&lt;account-id&gt;</code>:stateMachine:<code>&lt;myStateMachine&gt;</code> After you update your state machine, you can set the publish parameter to true in the same action to publish a new version. This way, you can opt-in to strict versioning of your state machine. Step Functions assigns monotonically increasing integers for state machine versions, starting at version number 1. All StartExecution calls within a few seconds use the updated definition and roleArn. Executions started immediately after you call UpdateStateMachine may use the previous state machine definition and roleArn.

```sql
UPDATE aws.stepfunctions.state_machines
SET 
stateMachineArn = '{{ stateMachineArn }}',
definition = '{{ definition }}',
roleArn = '{{ roleArn }}',
loggingConfiguration = '{{ loggingConfiguration }}',
tracingConfiguration = '{{ tracingConfiguration }}',
publish = {{ publish }},
versionDescription = '{{ versionDescription }}',
encryptionConfiguration = '{{ encryptionConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND stateMachineArn = '{{ stateMachineArn }}' --required
RETURNING
revision_id,
state_machine_version_arn,
update_date;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_state_machine"
    values={[
        { label: 'delete_state_machine', value: 'delete_state_machine' }
    ]}
>
<TabItem value="delete_state_machine">

Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to DELETING and begins the deletion process. A state machine is deleted only when all its executions are completed. On the next state transition, the state machine's executions are terminated. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine This API action also deletes all versions and aliases associated with a state machine. For EXPRESS state machines, the deletion happens eventually (usually in less than a minute). Running executions may emit logs after DeleteStateMachine API is called.

```sql
DELETE FROM aws.stepfunctions.state_machines
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="publish_state_machine_version"
    values={[
        { label: 'publish_state_machine_version', value: 'publish_state_machine_version' },
        { label: 'start_sync_execution', value: 'start_sync_execution' },
        { label: 'validate_state_machine_definition', value: 'validate_state_machine_definition' }
    ]}
>
<TabItem value="publish_state_machine_version">

Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the DeleteStateMachineVersion API action. PublishStateMachineVersion is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a revisionId, Step Functions checks for a previously published version of the state machine's current revision. Related operations: DeleteStateMachineVersion ListStateMachineVersions

```sql
EXEC aws.stepfunctions.state_machines.publish_state_machine_version 
@region='{{ region }}' --required 
@@json=
'{
"stateMachineArn": "{{ stateMachineArn }}", 
"revisionId": "{{ revisionId }}", 
"description": "{{ description }}"
}'
;
```
</TabItem>
<TabItem value="start_sync_execution">

Starts a Synchronous Express state machine execution. StartSyncExecution is not available for STANDARD workflows. StartSyncExecution will return a 200 OK response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration. This API action isn't logged in CloudTrail.

```sql
EXEC aws.stepfunctions.state_machines.start_sync_execution 
@region='{{ region }}' --required 
@@json=
'{
"stateMachineArn": "{{ stateMachineArn }}", 
"name": "{{ name }}", 
"input": "{{ input }}", 
"traceHeader": "{{ traceHeader }}", 
"includedData": "{{ includedData }}"
}'
;
```
</TabItem>
<TabItem value="validate_state_machine_definition">

Validates the syntax of a state machine definition specified in Amazon States Language (ASL), a JSON-based, structured language. You can validate that a state machine definition is correct without creating a state machine resource. Suggested uses for ValidateStateMachineDefinition: Integrate automated checks into your code review or Continuous Integration (CI) process to check state machine definitions before starting deployments. Run validation from a Git pre-commit hook to verify the definition before committing to your source repository. Validation will look for problems in your state machine definition and return a result and a list of diagnostic elements. The result value will be OK when your workflow definition can be successfully created or updated. Note the result can be OK even when diagnostic warnings are present in the response. The result value will be FAIL when the workflow definition contains errors that would prevent you from creating or updating your state machine. The list of ValidateStateMachineDefinitionDiagnostic data elements can contain zero or more WARNING and/or ERROR elements. The ValidateStateMachineDefinition API might add new diagnostics in the future, adjust diagnostic codes, or change the message wording. Your automated processes should only rely on the value of the result field value (OK, FAIL). Do not rely on the exact order, count, or wording of diagnostic messages.

```sql
EXEC aws.stepfunctions.state_machines.validate_state_machine_definition 
@region='{{ region }}' --required 
@@json=
'{
"definition": "{{ definition }}", 
"type": "{{ type }}", 
"severity": "{{ severity }}", 
"maxResults": {{ maxResults }}
}'
;
```
</TabItem>
</Tabs>
